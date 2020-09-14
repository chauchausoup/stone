//lets do REST parameter syntaxing

/* 
module.exports = function average(...args) {
    // what goes here?


    var le = args.length;
    var arg=args.reduce((a,b)=>a+b,0)
    return arg/le
    
};

 */

 //lets go to the default arguments now.


 //midpoint default parameter
/* 
 module.exports = function midpoint(a=0,b=1) {
    // what goes here?
return (a+b)/2;



}; */



//default parameters

module.exports = function makeImportant(arg,m=(a)=>(a.repeat(arg.length))){
    // what goes here?
    console.log(typeof this.m)
return arg + this.m('!');
}



