/**
 * Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
 */

const arr=[1,2,3,4,5]
console.log(arr.fill("a",0,2)); 

console.log("---------------------xxxxxxxxxxxxxxxxxx-----------------------------");
/**
 *  Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
 */

const arr2=[1,2,3]
console.log(arr2.reverse());
console.log(arr2);
console.log("---------------------xxxxxxxxxxxxxxxxxx-----------------------------");

/**
 * Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
  * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 */
console.log("---------------------xxxxxxxxxxxxxxxxxx-----------------------------");

const arr3=[0, 1, false, 2, undefined, '', 3, null,NaN]
const filtered=arr3.filter((n)=>{if(typeof(n)=='Number')
return n})
console.log(filtered);
console.log(arr3);
console.log("---------------------xxxxxxxxxxxxxxxxxx-----------------------------");
console.log("---------------------xxxxxxxxxxxxxxxxxx-----------------------------");


const compact = (array) => array.filter((el) => el);
console.log(compact(arr3))
 
console.log("---------------xxxxxxxxxxxxxxxxxxxxx-------------------");
/**
 * Task description: Write a method that returns an object composed of key-value pairs. 
  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
  * Task Complexity: 2 of 5 
 */

const arr4=[['a', 1], ['b', 2]]

arr4.map((val)=>{
    val.join(":")
},{})