//iterator for of

//so the classic fizz buzz problem can be easily computed using the JS ITERATOR

//HOW TO USE SYMBOL DOT ITERATOR
var max= process.argv[2]
var pre=0;
var fizzBuzz ={
    //make a method that has symbol iterator function
    [Symbol.iterator](){
            return{
                next(){
                    if(pre<max){
                        pre++
                        if(pre%3== 0 && pre % 5 ==0){
                         return {
                            done:false,
                            value:"FizzBuzz"
                        };
                        
                    }else if(pre %5==0){ 
                            return {
                            done:false,
                            value:"Buzz"
                        };
                      
    
                    }else if(pre%3 == 0 ){ 
                            return {
                            done:false,
                            value:"Fizz"
                        };   
                    }else{
                        return{
                            done:false,
                            value:pre
                        }
                    }
                    }
               
                
                    return {done:true};
                }
               
            };
        }
};




//console.log(fizzBuzz);


 for(var item of fizzBuzz){
    console.log(item)
}





