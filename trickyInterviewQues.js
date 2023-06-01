//scopeing
// var res=1

// console.log(call(3))//4
// console.log(res)//4

// function call(num) {
//     res=res+num;
//     return res;
// }
//------------------------------------------------------------------------------------------

//filter truthy values- thet give true when met in a boolean condition
//falsy values are- null, NaN, undefined, 0, -0, 0n,""
// let arr = [1, 2, null, 3, undefined, 4, NaN, 5,"a","10"];

// const filtered=arr.filter((val) => {
//     if (val) {
//         if(typeof val == "number") {
//             return val;
//         }
//     }
// })
// console.log(filtered);
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//hoisting

// let c;
// c = 20;
// console.log(c);

// d = 20;
// console.log(d);
// let d;
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

//to convert any value to number type(+)

// console.log(+true);//1
// console.log(typeof +true);//number
/* console.log(typeof +"string"); *///number
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

/* negation sign *///(!- makes truthy value false and !!- makes truthy value false and the false value to true)

// console.log(!"hello");//false
// console.log(!!"hello");//true
// console.log(typeof !"hello");//boolean

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

//objects


// let data = "size"
// const bird = {
//     size:"small",
// }

// console.log(bird[data]);//bird[data="size"]==bird["size"]==small
// console.log(bird["size"]);//bird[data="size"]==bird["size"]==small
// console.log(bird.size);//small
// console.log(bird.data);//undefined

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// let c = { name: "peter" };
// let d;
// d = c;

// c.name = "anil"
// console.log(d.name);//anil//why because when we are dealing with objects we deal with the reference type
//if we chane it in one place it will be changed everywhere because it will have the same memory reference.
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

//we cannot declare variable with the same name inside same scope with let and var with var and var we can do

// var x;
// var x = 10;
// console.log(x);//10

// var x;
// let x = 10;
// console.log(x);//SyntaxError: Identifier 'x' has already been declared
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

//new keyword always create an object

// let a = 10;
// let b = new Number(10)
// console.log(a==b);//true
// console.log(a === b);//false
// console.log(typeof b);//object

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// if we by mistake assign any property to a function it will not do any changes

// function dog() {
//     console.log("bark!");
// }

// dog.eat="pedigree"// this line will not affect anything

// console.log(dog());//bark! //undefined
// dog();//bark!

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------


//if one is number and other is string it will always do concatenation

// console.log(1+"2");//12
// console.log("1"+2);//12
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// let number = 0
//     console.log(number++);//0
//     console.log(++number);//2
//     console.log(number);//2

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// function getAge(...args) {
//     console.log(args);//[21]
//     console.log(typeof args);//object
// }

// getAge(21)

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// function getAge() {
//     "use strict"//ReferenceError: age is not defined
//     age = 21;
//     console.log(age);//ReferenceError: age is not defined
// }
// getAge()

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// const sum = eval('10*10+5')
// console.log(sum);//105

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

//property values are always in strings in objects.
//if it is numeric then its ok
// but if it is in string then you have to use "" to check

// let obj = { 1: "a", 2: "b", 3: "c" ,"hello":12}
// console.log(obj.hasOwnProperty("1"));//true
// console.log(obj.hasOwnProperty(1));//true
// console.log(obj.hasOwnProperty(1));//true
// console.log(obj.hasOwnProperty("hello"));//true
// console.log(obj.hasOwnProperty(hello));//this will give you error


//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// //normal function will execute first
// const foo=()=>{console.log("first");}
// const bar=()=>{setTimeout(()=>console.log("second"));}
// const baz = () => { console.log("third"); }

// bar();
// foo();
// baz();

// //first, third and second

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

//difference between bind and call

// const person = { name: 'lydia' }

// function sayhi(age) {
//     return `${this.name} is ${age}`
// }
// console.log(sayhi.call(person,21));
// console.log(sayhi.bind(person, 21));
// /**lydia is 21
// [Function: bound sayhi] */
// console.log(sayhi.call(person,21));
// console.log(sayhi.bind(person, 21)());
// /**lydia is 21
// lydia is 21 */

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// function sayHi() {
//     return (() => 0)();
// }
// console.log(typeof sayHi());//number


// function sayHi() {
//     return (() => 0);
// }
// console.log(typeof sayHi());//function
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// console.log(typeof 1);
// console.log( typeof "number");
// console.log(  typeof typeof number);
// console.log(  typeof typeof 1);//typeof 'number'-->string


//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// const numbers = [1, 2, 3]
// numbers[3] = numbers;
// console.log(numbers);//infinite array

//<ref *1> [ 1, 2, 3, [Circular *1] ]

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// console.log([]===[]);//false
// console.log([]==[]);//false

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// let data = [1, 2, 3].map(val => {
//     if (typeof val === 'number') return;//[ undefined, undefined, undefined ]
//     return val * 2;
// })

// console.log(data);
//------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

// when we are passing an object as a parameter it will pass the reference to the memory.
// function getInfo(member) {
//     member.name='anil'
// }

// const person = { name: 'tamil' }

// getInfo(person)
// console.log(person);

//------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
// function car() {
//     this.make = 'TATA'
//     return {make:"KIA"}
// }
// const mycar = new car()
// console.log(mycar.make);

//if we have a function and we are overiding that key that will be returned ans is KIA

//------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

// (() => {
//     let x = (y = 10);//because let has a block scope
// })();
// console.log(typeof x);//undefined
//-----------------------------------------------------------------------------------------


// (() => {
//     let x = (y = 10);//because var has a global scope
// })();
// console.log(typeof y);//number
//-----------------------------------------------------------------------------------------


// let x = 100;
// (() => {
//     var x = 20;
// })
// console.log(x);//100

//if we have a same name variable in the same scope then var will be residing inside block

// console.log (!true-true)//-1
// console.log(true+ +"10")//11