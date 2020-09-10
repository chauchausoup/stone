var inputs = process.argv.slice(2);
var result = inputs
  .map((item,index)=>{
    return item[0]
  })
  .reduce((a,b)=>{
    return a+b
  });
console.log(result);

