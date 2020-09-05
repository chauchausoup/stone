//lets chain our promises invocation from then
function first(){
return Promise.resolve("hey")
}

function second(){

}

first().then(data=>{
    second(data)
}).then(console.log)