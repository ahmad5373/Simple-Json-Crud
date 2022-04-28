const multer = require("multer");

const  fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, './image');
     },
    filename:  (req, file, cb)=> {
        cb(null , file.originalname);
    },
});
var upload = multer({storage:fileStorageEngine});


// app.post('/single', upload.single('image') ,(req, res,next) => {
//   console.log('req.body',req.file);
// res.send('Single File Upload Success!');
// });

module.exports = upload;