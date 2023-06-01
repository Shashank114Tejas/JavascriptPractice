//this by default resolves to an object or scope depending upon the context where it is being defined

//INSIDE A FUNCTION
//this always resolve to the scope where it is bound

//so to figure out where it is bound we have 4 different boundings

//1. default bingings
//rule no 1 - if a function is a standalone function then "this" bounds to the global object i.e window


// var age=22
// function checkThis() {
//     console.log(this.age);
// }

// checkThis();

//in console this will give you 22

//------------------------------------------------------------------------------------------------------------

//2.implicit binding
//when a function is inside an object and then "this" keyword refers to the callie name
//when you call a function using dot notation, this is implicitly bound to the object the function is being called from.

// var obj = {
//     name: 'shashank',
//     age: 30,
//     thisone:function thisone() {
//         console.log(`${this.name} is ${this.age} years old`);
//     }
// }

// obj.thisone()//obj is the callie here


// var obj = {
//     name: 'shashank',
//     age: 30,
//     thisone: function thisone() {
//         console.log(`${this.name} is ${this.age} years old`);
//     },

//     nestedobj: {
//         name: 'tejas',
//         age: 28,
//         anotherone: function anotherone() {
//             console.log(this.name + " is " + this.age + " years old ");
//         }
//     }
// }

// obj.thisone()//obj is the callie here
// obj.nestedobj.anotherone()//nestedobj is the callie here
//------------------------------------------------------------------------------------------------------------

//3.Explicit binding
/**
 * To explicitly bind a function call to a context, 
 * you simply have to invoke the call() on that function and pass in the context object as parameter:
 */


// function checkThis() {
//         console.log(this.age);
// }
    
// let obj = {
//     age:22
// }

// checkThis.call(obj)


//now no matter how you play with this obj it will remain the same--> this is called hard binding with the help of call method
// method.call(object)

// function checkThis() {
//         console.log(this.age);
// }
    
// let obj = {
//     age:22
// }

// let foo = function () {
//     checkThis.call(obj)
// }
// foo();//22
// setTimeout(foo, 100);//22

//4.Constructor Call Binding in JavaScript

function THIS(name,age) {
    this.name = name;
    this.age = age;
}


const myconstructor = new THIS('tejas', 30)
console.log(myconstructor.name);
console.log(myconstructor.age);