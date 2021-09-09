import User from '../model/User.js'
import Users from '../model/User.js'


export const createUser = async (req, res) => {
    const user = new Users({
        username: req.body.username,
        password: req.body.password,
        fullName: req.body.fullName,
        age: req.body.age,
        dob: req.body.dob
    })
    try {
        const saveUser = await user.save()
        res.send(`User has name ${user.fullName} is added`)

    } catch (error) {
        res.send(error)
    }
}

export const getUsers = async(req ,res) => {
    try {
        const users = await Users.find()
        res.send(users)
    } catch (error) {
        res.send({message : error})
    }
}

export const getUser = async(req, res) => {
    try {
        const user = await Users.findById(req.params.id)
        res.send(user)        
    } catch (error) {
        res.send({message : error})       
    }
    
}

export const deleteUser = async(req, res) => {
    try {
        const userDeleted = await Users.findOneAndRemove({_id : req.params.id})
        res.send(`User with ID: ${req.params.id} is deleted`) 
    }catch (error) {
        res.send(error)
    }
}

export const updateUser = async(req, res) => {
    const userUpdate = {
        username : req.body.username,
        password : req.body.password,
        fullName: req.body.fullName,
        age: req.body.age,
        dob : req.body.dob
    }
    try {
        await User.updateOne({_id: req.params.id} , {$set : userUpdate})
        res.send(`User with id ${req.params.id} is updated`)
    } catch (error) {
        res.send(error)
    }
   
}
