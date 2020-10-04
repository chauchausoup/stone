var PORT = process.argv[2];
var PATH = process.argv[3];


const express = require('express');
const app = express();
const path = require('path');

//const pug = require('pug');

var currentDate = new Date().toDateString();


//tell express which view engine we use
app.set('view engine','pug');

//specify the static path
//app.use(express.static(PATH ||  path.join(__dirname,'public')))

//this is the way to specify the path to the template files in views folder
//path join is used to produce crossplatform path
app.set('views',path.join(__dirname,'templates'))



//in view engine we use render
app.get('/home',(req,res)=>{
    res.render('index',{date:currentDate})
})


app.listen(PORT);

