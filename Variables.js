console.log("---------------------GLOBAL BLOCK------------------------");
let a=10;
console.log(a);
var b=50;
var b=60;
console.log(b)

const c=10000;


a=5000;
console.log("after reassigning: "+a);

console.log("---------------------IF BLOCK------------------------");

if(true)
{

a=4000
console.log(a);
console.log(b)
console.log("after reassigning: "+a);
console.log(c);
}
console.log("---------------------FUNCTION BLOCK------------------------");

function print(){
let a=30
var b=600
var d=10;
console.log(a);
console.log(b)
console.log(c);


a=7000;
console.log("after reassigning: "+a);

}
print();

console.log("---------------------GLOBAL BLOCK------------------------");

 console.log(a);
 console.log(b)
 console.log(a)
 console.log("after reassigning: "+a);


 var b=10000;
 console.log(c);
 //console.log(d);

//var b=400 global
//var is function scoped

//let-Inside the scope, the variables can be updated but not re-declared.

let fame=symbol();
let game=symbol();

console.log(game);
console.log(fame);
console.log(game==fame)