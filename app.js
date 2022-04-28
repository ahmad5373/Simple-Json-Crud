const express = require("express");
const app = express();
const array = require('./Array');
const multer = require("multer");
const table = require("./routes/table");
const json = require("./routes/json");
const PORT = process.env.PORT || 1600;



app.use(express.json());


app.use("/table",table);
app.use("/json" ,json)


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});

var upload = multer({ storage: storage })

// upload single file using this route
app.post('/uploadfile' , upload.single('myFile'), (req , res, next)=>{
const file = req.file
console.log('req,file' , req.file);
if(!file){
const error = new error ('please upload file')
error.httpStatuscode  = 400
return next (error)
}
res.send(file);

});




app.get("/", (req, res) => {
  res.sendFile(__dirname+ '/index.html');
});

// const numbers = [1, 2, 3, 4, 5];

// //Using Map
// // With arrow function
// const doubled = numbers.map((n) => n * 2);
// console.log("number with double value", doubled);

// //Using Filter
// const gt2 = numbers.filter((n) => n > 2);
// console.log("number with greater then 2", gt2);

// //Using filter
// const initialVal = 0;
// const result = numbers.reduce((accu, val) => val + accu, initialVal);
// console.log("show Some of numbers", result);

// var users = [
//   { user: "Naeem" },
//   { user: "Amjad" },
//   { user: "Mustfa" },
//   { user: "Muneer" },
//   { user: "Khurram" },
//   { user: "Asif" },
// ];

// //Geting Marks of All User
// const resultDetails = users.map((user) => {
//   const mark = Math.random() * 100;
//   user.mark = mark;
//   return user;
// });
// console.log("Users With Marks", users);

// //Select Candidate whos marks greater then 50
// const selectedCandidate = resultDetails.filter((user) => {
//   if (user.mark > 50) {
//     return user;
//   }
// });
// console.log("selectedCandidate with greater marks", selectedCandidate);

// // Create Team
// const TeamMembers = selectedCandidate.reduce((teamMembers, user) => {
//   teamMembers.push(user);
//   return teamMembers;
// }, []);
// console.log("TeamMembers ", TeamMembers);



app.listen(PORT, () => {
  console.log(`app is listining on : http://localhost:${PORT}`);
});
