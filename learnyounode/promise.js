
const promise1 = function(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
             resolve("John Cena")
        },2000)
         
     })
}

const promise2 = function(datafromfirst){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(`You can't see me, by : ${datafromfirst}`)
        },1000)
    })}

promise1()

    .then(function(data1){//data1 is the resolved data after we get from the promise1

        return promise2(data1)
    })
    .then((data2)=>{
        console.log(data2)
    })
    .catch(function(error){
        console.log(error)
    })



