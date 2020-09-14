var inputs = process.argv.slice(2);
var result = inputs.map((e,i,ar)=>e[0]).reduce((a,b)=>{
    a=a+b
    return a;
})
console.log(`[${inputs}] becomes "${result}"`)




//console.log(result)

/* 


.reduce((value,currentValue,index,arr)=>{
    console.log(value)
   //return value+ (currentValue);
});


*/



