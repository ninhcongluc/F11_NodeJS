import mongoose from 'mongoose'

const connect = mongoose.connect(process.env.DB_CONNECTION , (err) => {
    if(err) {
        console.log(err)
    }
    console.log('Connected to db ')
})

export default  connect
