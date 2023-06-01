//Given an array of numbers, filter out all the even numbers.

const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const even = arr.filter((val) => val % 2 === 0)
console.log(even);

//Given an array of strings, filter out all the strings that are longer than 5 characters.
const strings=["hello", "world", "this is a string", "that is also a string"]
const longerThan5 = strings.filter((val) => val.length>5)
console.log(longerThan5);

//Given an array of objects, filter out all the objects that have a property called "name".


const objects=[
    { "name": "John Doe", "age": 30 },
    { "name": "Jane Doe", "age": 25 },
    { "age": 20 }
]
  
const nameobj = objects.filter((val) => val.hasOwnProperty('name'))
console.log(nameobj);

//Given an array of numbers, multiply each number by 2.  
const arr1=[10,20,30,40,50]
const double = arr1.map((val) => val * 2)
console.log(double);

//Given an array of strings, capitalize each string.
const strs=["hello", "world", "this is a string", "that is also a string"]
const cap=strs.map((val)=>val.slice(0,1).toUpperCase()+val.slice(1))
console.log(cap);

//Given an array of objects, convert each object to a string.

const objs=[
    { "name": "John Doe", "age": 30 },
    // { "name": "Jane Doe", "age": 25 },
    // { "age": 20 }
]
  
const strObjs=objs.map((val)=>(JSON.stringify(val)))//converts objects into strings
console.log(strObjs);
objss=JSON.parse(strObjs);//converts strings into objects
console.log(objss.name);
console.log(objss.age);

//Given an array of numbers, find the sum of all the numbers.
const arr2 = [10, 20, 30, 40, 50]
const sum = arr2.reduce((acc, curr) => acc += curr, 0)
console.log(sum);
//Given an array of strings, find the concatenation of all the strings.

const str2 = ["hello", "world", "this is a string", "that is also a string"]

const concateneted=str2.reduce((acc,curr)=>acc+=curr,"")
console.log(concateneted.replaceAll(" ", ""));

//Given an array of objects, find the product of all the objects' values.

const values=[
    { "value": 1 },
    { "value": 2 },
    { "value": 3 }
]
  
const productVal = values.reduce((acc, curr) => acc * curr.value, 1)
console.log(productVal);

//Given an array of numbers, find the first even number.
const arra = [NaN, undefined, , 1, 3, 5, 7, 9, 10]//null

const firstEven = arra.find((val) => val % 2 === 0)
console.log(firstEven);

//Given an array of strings, find the first string that starts with the letter "A".

const strarr = [ "banana", "cherry", "dog", "elephant","Apple", 'article', 'amber']
const firstStrWithA = strarr.find((val) => val.startsWith("a")||val.startsWith("A"))
console.log(firstStrWithA);


//Given an array of objects, find the first object that has a property called "name".
const objs2=[
    { "name": "John Doe", "age": 30 },
    { "name": "Jane Doe", "age": 25 },
    { "age": 20 }
]

const firstObjWithName=objs2.find((val)=>{if(val.hasOwnProperty("name")==true)
    return val;
})
console.log(firstObjWithName);

// Given an array of strings, join the strings together with a comma in between.
const str3 = ["hello", "world", "this is a string", "that is also a string"]

console.log(str3.join());
//Given an array of objects, join the objects together with a newline character in between.
const ob=[
    { "name": "John Doe", "age": 30 },
    { "name": "Jane Doe", "age": 25 },
    { "age": 20 }
]
  
console.log(ob.join("\n"));
  
//Sort an array of numbers in ascending order.
const array = [10, 5, 2, 8, 7, 1]

console.log(array.sort((a, b) => a - b));
//Sort an array of strings in alphabetical order.
const arrAlpha = [ "Elephant","Banana", "Cherry", "Apple","Dog", ]
console.log(arrAlpha.sort())
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
//sort array of objects by name
console.log(characters.sort((a, b) => {
    if (a.name < b.name)
        return -1
    else if (a.name > b.name)
        return 1;
    else
        return 0;
}));

//Reverse the order of an array of numbers.
const nums = [1, 2, 3, 4, 5]
console.log(nums.reverse());
//Reverse the order of an array of strings.
const strss = ['a', 'b', 'c', 'd', 'e']
console.log(strss.reverse());
//Reverse the order of an array of objects.

const original=[
    { "name": "John Doe", "age": 30 },
    { "name": "Jane Doe", "age": 25 },
    { "age": 20 }
]
console.log(original.reverse((a, b) => b - a));

//splice-Remove the first element from an array.
const num = [1, 2, 3, 3, 99, 4, 4, 4, 5, 6, 7, 8, 9]
console.log(num.splice(0, 1));
//Remove the last element from an array.
console.log(num.splice(-1, 1));
//Remove the element at index 3 from an array.

console.log(num.splice(3, 1));
console.log(num);

//slice-Get a slice of an array from index 2 to index 5.
const num1 = [1, 2, 3, 3, 99, 4, 4, 4, 5, 6, 7, 8, 9]
console.log(num1.slice(2, 6));
console.log(num1);

//Get a slice of an array from the beginning to index 3.
const num2 = [1, 2, 3, 4, 99, 4, 4, 4, 5, 6, 7, 8, 9]
console.log(num2.slice(0, 4));
console.log(num2);

//Get a slice of an array from index 2 to the end.

const num3 = [1, 2, 3, 4, 99, 4, 4, 4, 5, 6, 7, 8, 9]
console.log(num3.slice(2));
console.log(num3);
