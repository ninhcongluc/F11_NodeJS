import express from "express";
import multer from "multer";


const  app = express();
const PORT = 5000

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()} - ${file.originalname}`)
    }
})
const upload = multer({storage: fileStorageEngine})



app.post('/single',upload.single('image') , (req, res) => {
    console.log(req.file)
    res.send('Uploaded Single File')
})

app.post('/multiple',upload.array('images', 4) ,(req, res) => {
    
    console.log(req.files)
    res.send('Multiple File Upload Successful')
})


app.post('/any',upload.any(), (req, res) => {
    console.log(req.files)
    res.send('File Upload Successful')
})


/*
- Ngoài ra có thể dùng upload('any') để upload dc tất cả các kiểu file
*/

app.listen(PORT, (req, res) => console.log(`Server is running on port ${PORT}`))

