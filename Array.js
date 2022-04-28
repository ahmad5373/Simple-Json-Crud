const express  = require('express');


const name = [
   "akmal" ,  "Assad" , "Jawad", "Muneer",
];

const num = [ 1 ,2, 3,4 ,5 , 6 ,7 ,8 ,9 ,10];

// // Table of 2 
// for(let i =1; i<=num.length;i++){
// const result = i * 2;
//    console.log('This is table of 2', result);
// }


const arr_2d = [[1,2], [3,4], [5,6], [7,8]]

// for (let i =0; i<arr_2d.length;i ++){
//    for(let j=0; j<arr_2d[i].length; j++){
//       console.log('this is number' ,arr_2d[i][j]);
//    }
// }

// name.forEach(Element => {
//     console.log(name);
// });


// for(let i = 0; i< name.length;i++){
//     console.log(name)
// }

// const Newname = name.map(Element=>{
// console.log(name)
// })
// Newname;



// const Printname = name.filter(Element=> {
//     console.log(name)
// })
// Printname;



//While Loop with simple variable
// var i = 1
// while(i<6){
//    console.log( "The number is "+i);
//    i++
// }

// // while loop with Array
// var number = [1,2,3,4,5,6,7,8,9];
// var index = 0;
// while(index<number.length){
//    console.log("This number is " +number[index]);
//    index++
// }


// //Do While loop with array
// var number = [1,2,3,4,5,6,7,8,9];
// var index = 0;
// do{
//    console.log("This number is " +number[index]);
//    index++
// }
// while(index<number.length) 



// with a while loop, the condition to be evaluated is tested at the beginning of each loop iteration,
//  so if the conditional expression evaluates to false, 
// the loop will never be executed.

// With a do-while loop, on the other hand, the loop will always be executed once even 
// if the conditional expression evaluates to false, because unlike the while loop, 
// the condition is evaluated at the end of the loop iteration rather than the beginning.


module.exports =Array;