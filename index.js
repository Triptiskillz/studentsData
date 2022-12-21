let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
  req.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET",
    "POST",
    "OPTIONS",
    "PUT",
    "PATCH",
    "DELETE",
    "HEAD"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  next();
});
const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let { studentsData } = require("./data.js");
let fs = require("fs");
let fname = "student.json";

app.get("/svr/resetData", function (req, res) {
  let data = JSON.stringify(studentsData);
  fs.writeFile(fname, data, function (err) {
    if (err) res.status(404).send(err);
    else res.send("Data in file is reset");
  });
});

app.get("/svr/students", function (req, res) {
  fs.readFile(fname, "utf8", function (err, data) {
    if (err) res.status(404).send(err);
    else {
      let studentsArray = JSON.parse(data);
      res.send(studentsArray);
    }
  });
});
app.get("/svr/students/:id", function (req, res) {
  let id = +req.params.id;
  fs.readFile(fname, "utf8", function (err, data) {
    if (err) res.status(404).send(err);
    else {
      let studentsArray = JSON.parse(data);
      let student = studentsArray.find((st) => st.id === id);
      if (student) res.send(student);
      else res.status(404).send("No student found");
    }
  });
});
app.post("/svr/students", function (req, res) {
  let body = req.body;
  fs.readFile(fname, "utf8", function (err, data) {
    if (err) res.status(404).send(err);
    else {
      let studentsArray = JSON.parse(data);
      let maxid = studentsArray.reduce(
        (acc, curr) => (curr.id > acc ? curr.id : acc),
        0
      );
      let newid = maxid + 1;
      let newStudent = { ...body, id: newid };
      studentsArray.push(newStudent);
      let data1 = JSON.stringify(studentsArray);
      fs.writeFile(fname, data1, function (err) {
        if (err) res.status(404).send(err);
        else res.send(newStudent);
      });
    }
  });
});

app.put("/svr/students/:id", function (req, res) {
  let body = req.body;
  let id = +req.params.id;
  fs.readFile(fname, "utf8", function (err, data) {
    if (err) res.status(404).send(err);
    else {
      let studentsArray = JSON.parse(data);
      let index = studentsArray.findIndex((st) => st.id == id);
      if (index >= 0) {
        let updateStudent = { ...studentsArray[index], ...body };
        studentsArray[index] = updateStudent;
        let data1 = JSON.stringify(studentsArray);
        fs.writeFile(fname, data1, function (err) {
          if (err) res.send(updateStudent);
          else res.send(updateStudent);
        });
      } else res.status(404).send("NO student found");
    }
  });
});

app.delete("/svr/students/:id", function (req, res) {
  let id = +req.params.id;
  fs.readFile(fname, "utf8", function (err, data) {
    if (err) res.status(404).send(err);
    else {
      let studentsArray = JSON.parse(data);
      let index = studentsArray.findIndex((st) => st.id == id);
      if (index >= 0) {
        let deleteStudents = studentsArray.splice(index, 1);
        let data1 = JSON.stringify(studentsArray);
        fs.writeFile(fname, data1, function (err) {
          if (err) res.status(404).send(err);
          else res.send(deleteStudents);
        });
      } else res.status(404).send("NO student found");
    }
  });
});
