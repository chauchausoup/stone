// write a program that performs an http get request to a url provided to you as the first command line argument write the string contents of each data from the response to a new line on the console 


//get request to the given url

//it gives me the response 

// we will manipulate the response


/* data.forEach(item=>{
    var stringContent=item.toString();
    console.log(stringContent);
});
 */

/* 
const http = require('http');
var url ='https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new';


callback = function(response){
    var str='';
    response.on('data',(chunk)=>{
        data += chunk;
    });
    response.on('end',()=>{
        console.log(JSON.parse(data));
    });

};


http.request(url,callback).end();
 */

const urlGiven = process.argv[2];
//var item='';
 require('http').get(urlGiven,(res)=>{
     
     res.on('error',function(error){
        console.log(error)
    })
     res.on('data',function(body){
         console.log(body.toString())
     })
     
    /*  res.on('end',function(){
         console.log(item)
     }) */

 });


