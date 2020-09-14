module.exports = function makeCounter(someObj) {
    
  someObj.next = function() {
    // complete me
   
     var i=1;

    i++

    if(i>10){
    return{
        done:true
      }}else{
        return{
            value:i,
            done:false
          
        }
      }
    
}}


