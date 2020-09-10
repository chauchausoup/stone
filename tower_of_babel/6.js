//computed property in objects

//before
/* var prop ="foo";
var obj ={
    [(()=>"foo" + "molly")()]:"bar"

};

console.log(obj)

*/


var obj = {
    [(()=>{
        if(process.argv[2]%2===0){
            return "even"
        }else{
            return "odd"
        }
    })()]:process.argv[2],
    [process.argv[2]+process.argv[3]]:process.argv[2]+process.argv[3]
}

console.log(obj)






