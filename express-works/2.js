var PORT = process.argv[2];
var PATH = process.argv[3];


const express = require('express');
const app = express();

//var currentDate = new Date().toDateString();

app.use(express.static(PATH ||  path.join(__dirname,'public')))


app.listen(PORT);

