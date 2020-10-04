const { EMSGSIZE } = require('constants');
//body parser in the house

const express = require('express');
const app = express();
const stylus = require('stylus');

const bodyparser = require('body-parser');

//middleware urlencoded
app.use(bodyparser.urlencoded({extended:false}))



app.post('/form',(req,res)=>{

    var rev = req.body.str.split('').reverse().join('')
    res.send(rev)
})

app.listen(process.argv[2])
