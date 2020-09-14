//destructuring
//lets start with object destructuring

/* 
let box={
    width:10,
    height:5,
    depth:4
}

let {width:x,depth}=box;
console.log(x,depth)
//console.log(width);
 */

let userArray = process.argv.slice(2);
    
var ob=Math.min(...userArray)





    
console.log(`The minimum of [${userArray}] is ${ob}`); 

// {username: "jdoe", email: "john@doe.com"}