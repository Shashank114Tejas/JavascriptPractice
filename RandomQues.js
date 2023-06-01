/**
 * Q1 Define a function called cleanNames that accepts an array of strings 
 * containing additional space characters at the beginning and end. 
 * The cleanNames() function should use the array map method to return a new array
 *  full of trimmed names. 
 * For example:
 * cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "]) 
should give
["avengers", "captain_america", "ironman", "black panther"]
 */

function cleanNames([...names]) {
   
    const trimmedArr = [...names].map((name) => name.trim());
    return trimmedArr;
    
}
console.log(cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "]));

/**
 * Q2 Write a function that converts an array of values from miles to kilometres
 *  using the map method. In the end, add the kilometres up in a new variable called 
 * "totalDistanceInKilometers" and return this variable.
 */

function totalDistanceInKilometers([...miles]) {
    const kilometers = [...miles].map((mile) => mile / 1000).reduce((acc, curr) => acc += curr, 0)
    return kilometers
}

console.log(totalDistanceInKilometers([5000, 3000, 8000, 10000])); 


/**
 * Q3 Square and sum the array elements using the arrow function 
 * and then find the average of the array.
 */

const arr = [1, 2, 3, 4, 5]
const average=arr.map((val) => Math.pow(val,2)).reduce((acc,curr)=>acc+=curr,0)/arr.length
console.log(average);

//Q4 Create a new array using the map function whose each element is equal to the original element plus 4.
const arr2 = [1, 2, 3, 4, 5]
const valPlus4 = arr2.map((val) => val += 4)
console.log(valPlus4);

//Q5 From the array of numbers, choose even double even numbers and compute the sum
//using Array's filter, map and reduce methods.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fin = numbers.filter((val)=>val % 2 === 0).map((val) => val*2).reduce((acc,curr)=>acc+=curr,0)
console.log(fin);

//Q6 Create a new array whose elements is in uppercase of words present in the original array.
let strings = ["avengers", "captain america", "ironman", "black panther"];

const upper = strings.map((val) => val.toUpperCase())
console.log(upper);

/**Use the .map() method on the heros array to return a new array.

The new array should rename the 'name' key to 'hero'.
The 'name' key should not appear in the new array.
The new array should have a new key added called (id).
The key 'id' should be based on the index.

EXPECTED OUTPUT (array of objects): 
[
  { id: 0, hero: 'Spider-Man' }, 
  { id: 1, hero: 'Thor' }, 
  { id: 2, hero: 'Black Panther' }, 
  { id: 3, hero: 'Captain Marvel' }, 
  { id: 4, hero: 'Silver Surfer' }
] */
const heros = [
    { name: 'Spider-Man' },
    { name: 'Thor' },
    { name: 'Black Panther' },
    { name: 'Captain Marvel' },
    { name: 'Silver Surfer' }
];
  
const newHeroes = heros.map((val, i, self) => {
    return {id: i ,hero: val.name}
})
console.log(newHeroes);


/** Consider the following array:

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
Write JavaScript statements that will produce the following output:
["exuberant", destruction", "present"] */

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const filtered = inputWords.filter((val) => val.length >= 7);
console.log(filtered);


/**Q9 Starting with an array containing the numbers 1 through 10, use filter, map, and reduce to produce the following.
 *  Use console.log to display the results.

An array of odd numbers.
An array of numbers divisible by 2 or 5.
An array of numbers divisible by 3 and then squared those numbers.
The sum of the following: square the numbers divisible by 5. */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oddNums = nums.filter((val) => val % 2)
const divisibleBy2And5 = nums.filter((val) => val % 2==0 && val%5==0)
console.log(oddNums);
console.log(divisibleBy2And5);

const divBy3andSqaure = nums.filter((val) => val % 3 == 0).map((val)=>val*2)
console.log(divBy3andSqaure);

const sumOfSquaredNumDivBy5=nums.filter((val)=>val%5===0).map((val)=>val*val).reduce((acc,curr)=>acc+curr,0)
console.log(sumOfSquaredNumDivBy5);
