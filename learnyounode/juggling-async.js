var url1= process.argv[2];
var url2= process.argv[3];
var url3= process.argv[4];

var main=[];

var container2=[];
var container3=[];


var http = require('http');


var container1=[];

http.get(url1,(response)=>{
  /*   function printer(str){
        console.log(str.toString().split(',').join(''))
    } */
    
    response.on('error',(err)=>{
        console.log(err)
    })
    response.on('data',(chunk)=>{
        container1.push(chunk)
        
    })
    response.on('end',()=>{
        //container1=container1.toString()
       //printer(container1)
        main.push(container1)

    })
})

var container2=[];

http.get(url2,(response)=>{
  /*   function printer(str){
        console.log(str.toString().split(',').join(''))
    } */

    
    response.on('error',(err)=>{
        console.log(err)
    })
    response.on('data',(chunk)=>{
        container2.push(chunk)
    })
    response.on('end',()=>{
        //container2=(container2).toString()
        //printer(container2)
        main.push(container2)
    })
})


var container3=[];

http.get(url3,(response)=>{

  
 /*    function printer(str){
        console.log(str.toString().split(',').join(''))
    } */
    

    response.on('error',(err)=>{
        console.log(err)
    })
    response.on('data',(chunk)=>{
        container3.push(chunk)
    })
    response.on('end',()=>{
        //container3=(container3).toString()
        //printer(container3)
        main.push(container3)
       
    })
  

})


printer(main);


 function printer(arr){
    arr.forEach((i)=>{
        console.log(i.toString())
    })
    
}