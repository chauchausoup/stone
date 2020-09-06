var http = require('http');
var str='';
var url = 'http://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new';


getData((data)=>{
    console.log(data)
})

function getData(callbackData){

    function callback(response){
        response.on('error',(err)=>{
            console.log(new Error(err))
        })
        response.on('end',function(chunk){
            callbackData(str)
           // str+=chunk;
        })
      /*   response.on('end',function(){
           
            callbackData(str)
        }) */
    }
    http.get(url,callback).end()

}

/* getData((data)=>{
    console.log(data.toString().split(',').join(''));
}) */


