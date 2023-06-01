let person = {};   // object literal
let person2 = new Object() //Object constructor
console.log("-----------------------------xxxxxxxxxxxxxxxxxxx--------------------------");

//complex key names using bracket notation
person.name = "atul"
person["birth place"]='dhanbad'

console.log(person);
console.log("-----------------------------xxxxxxxxxxxxxxxxxxx--------------------------");

//accessing key names from the user and then assigning
let key ="name"
person[key]="patul"
console.log(person);


let key2="birth place"
console.log(person[key2]);


let fruit = "apple"
let bag = {
    [fruit]:5
}
console.log(bag.apple);
console.log("-----------------------------xxxxxxxxxxxxxxxxxxx--------------------------");

//adding complex properties name using bracket notation
let fruits = 'apple';
let bags = {
  [fruits + 'Computers']: 5 // bag.appleComputers = 5
};
console.log(bags.appleComputers);
console.log("-----------------------------xxxxxxxxxxxxxxxxxxx--------------------------");

//Property value shorthand
function createUser(name, age) {
    return {
        name:name,
        age:age,
    }
}
let user= new createUser('shashank',30)
console.log(user.name);
console.log(user.age);
console.log("-----------------------------xxxxxxxxxxxxxxxxxxx--------------------------");

//shorthand
function createnewUser(name, age) {
    return {
        name,
        age,
    }
}
let user2= new createnewUser('tejas',50)
console.log(user2.name);
console.log(user2.age);
console.log("-----------------------------xxxxxxxxxxxxxxxxxxx--------------------------");



//gotcha
//There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:

let obj1 = {};
obj1.__proto__ = 5; // assign a number
console.log(obj1.__proto__); // [object Object] - the value is an object, didn't work as intended

console.log("-----------------------------xxxxxxxxxxxxxxxxxxx--------------------------");
//property names can be anything

//Property existence test, “in” operator
let obj = {
    for: 1,
    let: 2,
    const: 3,
    null: null,
    undefined: undefined,
    NaN:5,
    number:8,
    return:9
}
console.log("ret" in obj);//false        //"propertName" in obj
console.log(obj.hasOwnProperty("null")); //Object.hasOwnProperty("null")

console.log("return" in obj);//true
console.log(obj.for, obj.let, obj.const, obj.null, obj.undefined, obj.NaN, obj.number, obj.return);

console.log("-----------------------------xxxxxxxxxxxxxxxxxxx--------------------------");

//default objects sorted for numeric properties
let codes = {
    49: "Germany",
    41: "Switzerland",
    44: "Great Britain",
    // ..,
    1: "USA"
  };
  
  for (let code in codes) {
    console.log(code); // 1, 41, 44, 49 
}

console.log("-----------------------------xxxxxxxxxxxxxxxxxxx--------------------------");
  
//to fix this we can do something like + adding +
let codese = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for (let code in codese) {
    console.log(+code); // 1, 41, 44, 49 
}

console.log("-----------------------------xxxxxxxxxxxxxxxxxxx--------------------------");

function isEmpty(obj)
{
    for (let key in obj) {
        return false;
    }
    return true;
}
console.log(isEmpty(codese));


let person5={}
console.log(isEmpty(person5));

console.log("-----------------------------xxxxxxxxxxxxxxxxxxx--------------------------");


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

 // Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
//If salaries is empty, then the result must be 0.

let sum = function (obj) {
    let total=0
    for (let key in obj)
    {
        total+=obj[key]
    }
    return total;
}

console.log(sum(salaries));
console.log(sum(person5));

console.log("-----------------------------xxxxxxxxxxxxxxxxxxx--------------------------");
//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
/**
 * Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.
 */
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  
  // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key]== "number") {
          obj[key]= obj[key]* 2;
        }
    }

}
multiplyNumeric(menu)
console.log(menu);

console.log("-----------------------------xxxxxxxxxxxxxxxxxxx--------------------------");
