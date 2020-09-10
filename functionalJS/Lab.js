
 // lets go to upperCase 
/*  function toUpperCaseArray(items){
    if(!items.length) return []
    var head = items[0].toUpperCase()
    console.log([head])

    var tail=items.slice(1)
    console.log(tail)
    return [head].concat(toUpperCaseArray(tail))
 }


 console.log(toUpperCaseArray(['Namaste','Pokhara']));

 */


/*  console.log() */


/* function Areduce(arr, fn, initial) {
    
    var index=0;

 

    var total=initial; 
    var length = arr.length;

    function fn(total,currentValue,index,array){
        console.log(index);
        console.log(array);

        if(index==length) return total;
        
        currentValue=array[index];
        index++;
        array=array.slice(1);

        return fn(total,currentValue,index,array);
    }
    return fn(total,arr[index],index,arr);
}


var a=Areduce([1,2,3,4],(total,initial,index,array)=>total=total+initial,0);



console.log(a); */




var a=[1,2,3,4].reduce(function(total,initial,index,array){
    return total=total+initial
},0);



console.log(a);



