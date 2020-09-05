const fs=require('fs');
const str= fs.readFileSync(process.argv[2],'utf8');
var len = str.split('\n').length;
console.log(len-1);
