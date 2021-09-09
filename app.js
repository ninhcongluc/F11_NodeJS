import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv/config'
import connectDB  from './model/db.js'

// import routes
import usersRoutes from './routes/users.js'


const app = express()
const PORT = 8080
app.use(bodyParser.json())
app.use('/users', usersRoutes)

// listening to the server
app.listen(PORT , (req, res) => console.log(`Server is runnning on port: http://localhost:${PORT}`))