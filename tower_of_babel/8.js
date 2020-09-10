
var max = process.argv[2]
var pre = 0;
var fizzBuzz = function* () {

    while(pre < max) {   //see here you need to create a loop manually
        pre++
        if (pre % 3 == 0 && pre % 5 == 0) {
            yield "FizzBuzz"
        } else if (pre % 5 == 0) {
            yield "Buzz"
        } else if (pre % 3 == 0) {
            yield "Fizz";
        } else {
            yield pre;
        }
    }
}();

//console.log(fizzBuzz);


for (var item of fizzBuzz) {
    console.log(item)
}






