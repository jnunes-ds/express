var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'client')));

let consoleMethod = (req, res, next) => {
    console.log(req.body);
    next();
};

let hello = (req, res) => {
    res.send("Hello World!")
};

app.use("/", bodyParser.json());
app.use("/", consoleMethod);
app.get("/", hello);

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