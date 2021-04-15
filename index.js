var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const { get } = require('https');


const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'client')));

const consoleMethod = (req, res, next) => {
    console.log(req.body);
    next();
};

const hello = (req, res) => {
    res.send("Hello World!")
};

const students = [
    { id: 0, nome: "Jose" },
    { id: 1, nome: "Maria" },
    { id: 2, nome: "João" },
    { id: 3, nome: "Marcos" },
];

const getStudents = (req, res) => {
    res.json(JSON.stringify(students));
}

const getStudent = (req, res) => {
    console.log(req.query);
    let student = students[req.query.id];
    res.json(student);
};

app.use("/", bodyParser.urlencoded());
app.use("/", consoleMethod);

app.get("/", hello);
app.get("/students", getStudents);
app.get("/student", getStudent);

app.post("/", hello);

app.put("/", (req, res) => {
    res.send("<Hello,>Hello, world! from PUT!</Hello,>");
});

app.delete("/", (req, res) => {
    res.send("<h1>Hello, world! from DELETE!</h1>");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});