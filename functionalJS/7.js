function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE

    //array where the thigs change
    //fn callback function
    //initial assumption to the initial value of the callback function
    var i=0;

    if(i==arr.length) return initial ;/*  if the array finishes our work completes */

    var iterationValue=arr[i] //current value

    var iterationArray=arr.slice(1); 


    fn()
    function fn(total,currentValue,index,array){






        return fn(total,currentValue,index,array)
    }

    
    




  }
  
  module.exports = reduce;


