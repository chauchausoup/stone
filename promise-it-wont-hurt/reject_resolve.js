//reject and then reosolve the promise in JS
// there are event emitters and other repeatable callbacks but promises are different because they are not repeateble, thats what ES2015 said;
//call back functions on calling more than once might create vexing states
var myPromisingFact = new Promise((resolve,reject)=>{
    resolve('I FIRED');
    reject (new Error('I DID NOT FIRE'))
})
function onRejected(err){
    console.log(err)   
}
myPromisingFact
.then(success=>{
        console.log(success)
},failure=>{
        onReject(failure)
})

