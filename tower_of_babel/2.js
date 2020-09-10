/* //class in ES5
var Person = function(name){
    this.name=name;
};
Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.setName=function(name){
    return this.name;
}

var alice = new Person("alice");
console.log(alice.getName())
alice.setName('bob')
console.log(alice.getName())
 */


//ES6 classes

/* 
class Person{
    constructor(name){
        this.name=name
    }

    getName(){
        return this.name;
    }

    setName(name){
        return this.name=name;
    }



}


var alice = new Person("alice");
console.log(alice.getName())
alice.setName('alice');
console.log(alice.getName())
 */




 class Character{
     constructor(x,y){
         this.x=x;
         this.y=y;
         this.health_=100;
     };

     damage(){
         this.health_=this.health_ -10;
     };

     getHealth(){
         return this.health_;
     };

     toString(){
         return  `x: ${this.x} y: ${this.y} health: ${this.getHealth()}` ;

        };
    }


var x= process.argv[2];
var y = process.argv[3];

var character=new Character(+x,+y);
character.damage();
console.log(character.toString());
