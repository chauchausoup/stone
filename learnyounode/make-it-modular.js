const mymodule = require('./mymodule');

const fs = require('fs');
const path = require('path');

//path.extname()

const folderPath = process.argv[2];
const filePath = process.argv[3];


//callback

function mama(err,res){
    if(!err){
        res.forEach(item=>{
            console.log(item);
        });
    }else{
        console.log(err)
    }
}

mymodule(folderPath,filePath,mama);



