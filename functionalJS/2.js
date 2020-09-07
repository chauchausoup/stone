//funciton that takes 
function repeat(func,num){
//
if(num>0){
    return repeat(func,num-1)
}
else{
    return;
}

}
module.exports = repeat;
