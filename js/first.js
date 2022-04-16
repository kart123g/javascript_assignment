console.log('hello');

// IF ELSE
var a = 2;
var b =2;
if(a+b>3){
    console.log(a+b); 
}
else
    console.log("hi");
// for of
let names = ['raj','kamal','shayam','mohan']
for(item of names){
    console.log(item+"s");
}
var i = 1
console.log(i++)
console.log(++i)

console.log(a**b)

// Hoisting
console.log(c);
var c = 5;
console.log(c);

var d = 10;
var d = 10;

var obj = {
    name:"Ram",
    class:"A",
    batch:1,
    sing(){
        console.log(`${this.name} study in class`);
    }
};
console.log(obj.name);
obj.sing();
//console.log(obj.sing());
console.log(obj["batch"]);

var arr1 = [4,5,6,,8,9]
console.log(arr1[3]);
console.log(arr1[4]);

// Array
let arr = new Array(24,'rose',new Object());
console.log(arr);
arr1.push(0)
console.log(arr1);
arr1.pop(5)
console.log(arr1);
arr1.unshift(400)
arr1.unshift(40)
console.log(arr1[0]);
console.log(arr1.shift());

// SPLICE
arr1.splice(5,"60");
console.log(arr1);

//SLICE
console.log(arr1.slice(0,3));

let animal={
    name:"dog",
    eat(a,b){
        console.log(this.name + " is eating " + a +" "+ b );
    }
};
let human={
    name:"Gopal"
};
animal.eat(5,"bones");
animal.eat.call(human,10,"chips");
animal.eat.apply(human,[10,"chips"]);

let pant={
    name:'fur',
    prnt: function () {
        console.log('a',this);
        var an_prnt = function(){
            console.log('b',this);
        }
        an_prnt();
    }
};
pant.prnt();

// CONSTRUCTOR
class Building{
    constructor(length){
        this.length=length;
    }
    display(){
        console.log(this);
    }
}
let obj1 = new Building(50);
obj1.display();

// PROTYPE INHERTENCE
let father = {
    name:'John',
}
let son1  = {};
let son = Object.create(father)
console.log(father.isPrototypeOf(son));
console.log(father.isPrototypeOf(son1));

// ERROR
try{
    console.log(a);
    console.log("try called");
}
catch(error){
    console.log("We find a error " + error);
}

console.log(document);
console.log(document.title);

// // ALERT
// var age = prompt("Enter your age");
// if(age>18)
//     alert("You Have A Right to Vote");
// else
//     alert("You don't have a right to vote");


// CLASS Name 
var d = document.getElementsByClassName('sport');
console.log(d);

// on CLICK
// var lis = document.querySelectorAll('li');
// for(var i=0;i<lis.length;i++){
//   lis[i].addEventListener('mouseover',function(){this.style.color="red";});
// }

// Canvas
let can = document.getElementById("table");
let draw_ = can.getContext("2d");

draw_.fillStyle = "blue";
draw_.fillRect(100,100,30,30);

draw_.fillStyle = "orange";
draw_.beginPath();
draw_.arc(200,200,10,0,Math.PI*2,false);
draw_.closePath();
draw_.fill();


