//spread operator 


var rawArgs = process.argv.slice(2);  
     var args = [];  
       
     rawArgs.forEach(val => {  
       let commaSep = val.split(',');  
       commaSep.forEach(val => {  
         if(val !== '') args.push(+val);  
       });  
     });  
       
     // write a function called `avg` here that calculates the average.  
     var length=args.length;


function avg(...args){
    
     var a= args.reduce((a,b)=>{
        return a+b;
    })

   return (a/length);

}

       
     console.log(avg(...args)); 