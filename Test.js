/**
 * 1.How can you use the filter function to extract all the elements in an array 
 * that are not undefined, null or NaN?
let arr = [1, 2, null, 3, undefined, 4, NaN, 5];
// Output: [1, 2, 3, 4, 5]
 */

let arr = [1, 2, null, 3, undefined, 4, NaN, 5];
let filteredArr = arr.filter((val) => {
  return (val!== null && val!== undefined && typeof(val) !== 'NaN' );//val=== NaN
});
// const compact = (array) => array.filter((el) => el);
// log(compact(arr))

console.log(filteredArr);
console.log("----------------------xxxxxxxxxxxxxxxxxxxx---------------------");
/**
 * 2. How can you use the map function to create a new array that contains the lengths of each word in an array of strings?
let words = ['apple', 'banana', 'cherry'];
// Output: [5, 6, 6]
 */
let words = ['apple', 'banana', 'cherry'];

let wordsLengthArr=words.map((word)=>word.length)
console.log(wordsLengthArr);
console.log("----------------------xxxxxxxxxxxxxxxxxxxx---------------------");


/**
 * 3. How can you use the reduce function to find the maximum value in an array of numbers?
let arr = [3, 7, 1, 9, 5];
Output: 9

 */
let arr2 = [3, 7, 1, 9, 5];
 const largest=arr2.reduce((acc,curr)=>curr>acc?acc=curr:acc=acc,0)
 console.log(largest);
 console.log("----------------------xxxxxxxxxxxxxxxxxxxx---------------------");

 /**
  * 
4.How can you use the sort method to sort an array of objects by a age property in descending order?

let arr = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
];
Output: [{ name: 'Jane', age: 30 }, { name: 'John', age: 25 }, { name: 'Bob', age: 20 }]
  */
let arr3 = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 20 }
  ];

  const sortedByAge=arr3.sort((a,b)=>b.age-a.age)
  console.log(sortedByAge);
  
  console.log("----------------------xxxxxxxxxxxxxxxxxxxx---------------------");

  /**
   * 5.How can you use the reverse method to reverse the order of words in a sentence, while preserving the order of characters in each word?
let sentence = 'The quick brown fox';
 Output: 
 'fox nworb kciuq ehT' 
 //fox brown quick The
   */


 let sentence = 'The quick brown fox';
const revSentence=sentence.split(" ").reverse().map((val)=>val.split("").reverse().join("")).join(" ")

console.log(revSentence);

/**
 * Write a function that takes a string as input and returns 
 * the most common character in the string. 
 * If there are multiple characters with the same frequency, 
 * return the one that appears first in the string.
 */

function mostRepetitiveCh(str){
 const words=str.replaceAll(" ","").split("").reduce((acc,curr)=>{
  if(acc[curr]){
  acc[curr]=++acc[curr]
  }
  else{
  acc[curr]=1
  }
  return acc;
 },{})
 console.log(words);


 const values = Object.values(words);
 const maxValue = Math.max(...values);
 return maxValue;
}
console.log(mostRepetitiveCh("The cleaver fox jumps over the lazy dog")); 
console.log(mostRepetitiveCh("You only live once"));

// str = "The clever fox jumps over the lazy dog";

// function findChar(str,ch){
// let count = 0;
// for(let i=0;i<str.length;i++){
//       if(str.charAt(i) == ch){
//         count++;
//       }
//   }
//   return count;
// }



// console.log(findChar(str,'e'));


//diff b/w substring and slice

//substring interchange values when the starting index is greater than the ending index
/**that this behavior of swapping the parameters only applies to the substring method.
 *  If we use the slice method with a starting index greater than the ending index, 
 * it will return an empty string instead.
 * 
 * the main difference between slice and substring in JavaScript is how they handle their parameters:
 *  substring takes a starting and ending index, while slice takes a starting and ending position.
 *  Additionally, slice has more flexible behavior for omitting or using negative indices. */
const str = "Hello World";
const sub = str.substring(7, 2);
const sil= str.slice(7,2)
console.log(sub); 
console.log(sil);