import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/index.js'

const app = express()
app.use(bodyParser.json())
routes(app)

const PORT = 3000


app.listen(PORT, (req, res) => console.log(`Server is running on port: http://localhost:${PORT}`))