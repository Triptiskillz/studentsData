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

var port = process.env.PORT || 2410;

app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let { studentsData } = require("./data.js");
let fs = require("fs");
let fname = "student.json";

app.get("/resetData", function (req, res) {
  let data = JSON.stringify(studentsData);
  fs.writeFile(fname, data, function (err) {
    if (err) res.status(404).send(err);
    else res.send("Data in file is reset");
  });
});

app.get("/customers", function (req, res) {
  fs.readFile(fname, "utf8", function (err, data) {
    if (err) res.status(404).send(err);
    else {
      let studentsArray = JSON.parse(data);
      res.send(studentsArray);
    }
  });
});
app.get("/customers/:id", function (req, res) {
  let id = req.params.id;
  fs.readFile(fname, "utf8", function (err, data) {
    if (err) res.status(404).send(err);
    else {
      let studentsArray = JSON.parse(data);
      let student = studentsArray.find((st) => st.id === id);
      if (student) res.send(student);
      else res.status(404).send("No found");
    }
  });
});
app.post("/customers", function (req, res) {
  let body = req.body;
  fs.readFile(fname, "utf8", function (err, data) {
    if (err) res.status(404).send(err);
    else {
      let studentsArray = JSON.parse(data);
      let newStudent = { ...body};
      studentsArray.push(newStudent);
      let data1 = JSON.stringify(studentsArray);
      fs.writeFile(fname, data1, function (err) {
        if (err) res.status(404).send(err);
        else res.send(newStudent);
      });
    }
  });
});

app.put("/customers/:id", function (req, res) {
  let body = req.body;
  let id = req.params.id;
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
      } else res.status(404).send("No found");
    }
  });
});

app.delete("/customers/:id", function (req, res) {
  let id = req.params.id;
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
      } else res.status(404).send("No found");
    }
  });
});
