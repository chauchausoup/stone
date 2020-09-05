

var promise = new Promise((fulfill,reject)=>{
    setTimeout(()=>{
        reject (new Error("REJECTED!"))
    },300);
})
function onReject(data){
    console.log(data)
}

promise
.then(null,err=>{
    onReject(err.message)
})


