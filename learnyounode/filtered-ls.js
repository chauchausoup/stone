//program that prints the list of file in a given directory
//first argument as dir name 
//second as a file extension eg : 'txt'

const fs = require('fs');
const path = require('path');
const { argv } = require('process');

//path.extname()

const folderPath = process.argv[2];
fs.readdir(folderPath,(err,data)=>{
    if(!err){
        data.forEach((item,index)=>{
            if(((path.extname(item)).split('.')[1]) === process.argv[3]){
                //console.log(path.extname(data[0])+'\n');
                console.log(item);
            }
        });
        
    }else{
        console.log(err);
}});




