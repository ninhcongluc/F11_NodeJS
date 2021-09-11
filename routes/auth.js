import express from 'Express'
import Joi from 'joi'
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import authMiddleware from '../middleware/checkAuth.js'

const users = []
const saltRounds = 10
const SECRET = 'ninhconglucdz'


const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
    password: Joi.string().alphanum().min(6).max(200).required()
})


const router = express.Router()

// router.get('/login', (req, res) => res.send('Login Page'))


router.post('/register', async (req, res) => {
    // valid done
    const { email, password } = req.body
    const check = schema.validate({ email, password })
    if (check.error) {
        return res.status(400).send(check.error.message)
    }
    // check user exit on database
    const userExisted = users.find(user => user.email == email)
    if (userExisted) {
        return res.send('User existed in database')
    }
    // hash pasword and save to mock db
    const hash = await bycrypt.hash(password, saltRounds)
    users.push({ email, password: hash })

    // return client jwt
    const token = jwt.sign({ email }, SECRET, { expiresIn: 10000 })
    res.json({token})
})


router.post('/login', async (req, res) => {
    const { email, password } = req.body
    // check email exist db
    const user = users.find(user => email === user.email)
    if (!user) {
        return res.send('User not existed')
    }
    // compare password with hash password
    const passMatched = await bycrypt.compare(password, user.password)
    if (!passMatched) {
        return res.send('Password not matching')
    }

    const token = jwt.sign({ email }, SECRET, { expiresIn: 10000 })
    res.json({ token })

})


// get all users
router.get('/users', authMiddleware, (req, res) => {
    res.send(users)
})


export default router