let fs = require("fs");
let readLine = require("readline-sync");


let fname = "hello.txt";

let stores = { A: "0", B: "0" };
function writeJson() {
  let str = JSON.stringify(stores);
  fs.writeFile(fname, str, function (err) {
    if (err) console.log(err);
  });
}
function valueAJson() {
  fs.readFile(fname, "utf8", function (err1, content1) {
    if (err1) console.log(err1);
    else {
      let obje = JSON.parse(content1);
      let num = +obje.A;
      let total = num + 1;
      let str = total.toString();
      stores = { A: str, B: "0" };
      console.log(stores);
      let str1 = JSON.stringify(stores);
      fs.writeFile(fname, str1, function (err) {
        if (err) console.log(err);
      });
    }
  });
}
function valueBJson() {
  fs.readFile(fname, "utf8", function (err1, content1) {
    if (err1) console.log(err1);
    else {
      let obje = JSON.parse(content1);
      let num = +obje.B;
      let total = num + 1;
      let str = total.toString();
      stores = { A: "0", B: str };
      console.log(stores);
      let str1 = JSON.stringify(stores);
      fs.writeFile(fname, str1, function (err) {
        if (err) console.log(err);
      });
    }
  });
}
function readJSON() {
  fs.readFile(fname, "utf8", function (err, data) {
    if (err) console.log(err);
    else {
      let obje = JSON.parse(data);
      console.log(obje);
    }
  });
}
let option = readLine.question(
  "Enter Option 1:Write 2:Read 3:valueA +1 4:valueB +1 - "
);
switch (option) {
  case "1":
    writeJson();
    break;
  case "2":
    readJSON();
    break;
  case "3":
    valueAJson();
    break;
  case "4":
    valueBJson();
    break;
}
