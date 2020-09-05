//var a = Number(process.argv[2])

//console.log(Number(process.argv[2])+Number(process.argv[3]))

console.log(process.argv.splice(2).reduce((a,b)=>Number(a)+Number(b),0));



