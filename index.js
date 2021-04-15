var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var student = require('./routes/student');


const app = express();

app.use(bodyParser.urlencoded());

app.use("/", student);



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});