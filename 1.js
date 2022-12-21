// let fs= require('fs');

// function getStat(filename){
//     console.log("stat:",filename);
//     fs.stat(filename,function(err,content){
//         if(err) console.log(err);
//         else console.log(content);
//     });
// }

// function checkAccess(filename){
//     console.log('access:',filename)
//     fs.access(filename,function(err){
//         err? console.log("Does not exist"):console.log("Exists");

//     });
// }
// function readFile(filename){
// console.log("readFile:",filename);
// fs.readFile(filename,"utf8",function(err,data){
//     if(err)console.log(err);
//     else console.log(data);
// })
// }
// function writeFile(filename,data){
//     console.log('writeFile:',filename)
//     fs.writeFile(filename,data,function(err){
//         if(err)console.log(err);

//     });  
// }

// function appendFile(filename,data){
//     console.log('appendFile:',filename)
//     fs.appendFile(filename,data,function(err){
//         if(err)console.log(err);

//     });  
// }
// let fname ="hello.txt";
// // getStat(fname);
// // checkAccess(fname)
// readFile(fname)
// // writeFile(fname,"world!")
// // appendFile(fname,'Hello,')
// let fs = require("fs");
// let readLine = require("readline-sync");

// let fname = readLine.question("Enter name of file:");

// let txt = readLine.question("Enter text to be appended to file:");

// fs.access(fname, function (err) {
//     // console.log(err)
//   if (err) {
//     fs.writeFile(fname, txt, function (err) {
//       if (err) console.log(err);
//       else {
//         console.log("Write Successful");
//         fs.readFile(fname, "utf8", function (err1, content1) {
//           if (err1) console.log(err1);
//           else console.log(content1);
//         });
//       }
//     });
//   } else {
//     fs.readFile(fname, "utf8", function (err, content) {
//       if (err) console.log(err);
//       else {
//         console.log("Bofore::", content);
//         fs.appendFile(fname, txt, function (err) {
//           if (err) console.log(err);
//           else {
//             console.log("Append Successful");
//             fs.readFile(fname, "utf8", function (err, content) {
//               if (err) console.log(err);
//               else console.log("After::", content);
//             });
//           }
//         });
//       }
//     });
//   }
// });
// let fs = require("fs");
// let readLine = require("readline-sync");
// let entervalue = readLine.question("Enter the Number");

// let fname = 'hello.txt';

// if(entervalue==1){
//     let txt = '0';
//     fs.writeFile(fname, txt, function (err) {
//         if (err) console.log(err);
//         else {
//           console.log("Create Successful");
//           fs.readFile(fname, "utf8", function (err1, content1) {
//             if (err1) console.log(err1);
//             else console.log(content1);
//           });
//         }
//       });

// }else if(entervalue==2){
//           fs.readFile(fname, "utf8", function (err1, content1) {
//             if (err1) console.log(err1);
//             else console.log(content1);
//           });
// }else if(entervalue==3){
//     fs.readFile(fname, "utf8", function (err1, content1) {
//         if (err1) console.log(err1);
//         else {
//             let num = +content1;
//             let total = num +1;
//             let str = total.toString()
//             console.log(str)
//             fs.writeFile(fname, str, function (err) {
//                 if (err) console.log(err);
//             })
//         };
//       });

// }else if(entervalue==4){
//     fs.readFile(fname, "utf8", function (err1, content1) {
//         if (err1) console.log(err1);
//         else {
//             let num = +content1;
//             let total = num -1 ;
//             let str = total.toString()
//             console.log(str)
//             fs.writeFile(fname, str, function (err) {
//                 if (err) console.log(err);
//             })
//         };
//       });

// }else{
//     console.log("Plase enter the number b/w 1 to 4")
// }

