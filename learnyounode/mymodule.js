const fs = require('fs');
const path = require('path');




module.exports=(folder,filename,callback)=>{
    var fileList = [];

    fs.readdir(folder,(err,data)=>{
        if(err){
            return callback(err);
            
        }
            data.forEach((item,index)=>{
                if(((path.extname(item)).split('.')[1]) === filename){
                    //console.log(path.extname(data[0])+'\n');
                    //console.log(item);
                    fileList.push(item);

                }
               
            });
            callback(null,fileList);
 
    });

};






