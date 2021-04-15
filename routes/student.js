var express = require('express');
var router = express.Router();

const students = [
    { id: 0, nome: "Jose" },
    { id: 1, nome: "Maria" },
    { id: 2, nome: "João" },
    { id: 3, nome: "Marcos" },
];


const getStudents = (req, res) => {
    res.json(JSON.stringify(students));
}

const getStudentByBody = (req, res, next) => {
    let student = students[req.body.id];
    student ? res.json(student) : next();
};

const getStudentByQuery = (req, res) => {
    let student = students[req.query.id];
    student ? res.json(student) : res.send("Student not found");
};

const getStudentByParams = (req, res) => {
    let student = students[req.params.id];
    student ? res.json(student) : res.send("Student not found");
};

router.get("/student/all", getStudents);
router.get("/student", getStudentByBody, getStudentByQuery);
router.get("/student/:id", getStudentByParams);


router.put("/", (req, res) => {
    res.send("<Hello,>Hello, world! from PUT!</Hello,>");
});

router.delete("/", (req, res) => {
    res.send("<h1>Hello, world! from DELETE!</h1>");
});

module.exports = router;