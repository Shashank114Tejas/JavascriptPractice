
//1. Given a string, reverse each word in the sentence

var string = "Welcome to this Javascript Guide!";

const strarr=string.split(" ").reverse().map((val)=>val.split("").reverse().join("")).join(" ")
//Output becomes !ediuG tpircsavaJ siht ot emocleW
console.log(strarr);//!ediuG tpircsavaJ siht ot emocleW


console.log("------------------------------xxxxxxxxxxxxxxxxxxxx-------------------");
/**2. How to empty an array in JavaScript?
method 1
method 2
method 3 */

var arr = ["Welcome", "to", "this", "Javascript", "Guide!"]

//  arr.splice(0)
// console.log(arr);

arr = [];
console.log(arr);

// arr.length=0
// console.log(arr);
console.log("------------------------------xxxxxxxxxxxxxxxxxxxx-------------------");

//3. How would you check if a number is an integer?
//integer means no decimal

function isInt(num) {
   return num % 1 === 0?true:false
}
console.log(isInt(4));
console.log(isInt(4.4));
console.log(isInt(40.1));
console.log("------------------------------xxxxxxxxxxxxxxxxxxxx-------------------");


/**4. Explain what a callback function is and provide a simple example. */

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function doOperation(operation, a, b) {
   return operation(a, b);
}


let addi = doOperation(add, 2, 3)
let multi = doOperation(multiply, 2, 3)
console.log(addi);
console.log(multi);


function modifyArray(arr, callback) {
    // do something to arr here
    arr.push(100);
    // then execute the callback function that was passed
    callback();
  }
  
  var arr = [1, 2, 3, 4, 5];
  
  modifyArray(arr, function() {
    console.log("array has been modified", arr);
  });
  console.log("------------------------------xxxxxxxxxxxxxxxxxxxx-------------------");

/**5. Given two strings, return true if they are anagrams of one another */
  
let str = "abcd"
let str2 = "dcba"

let strarr1=str.split("").sort()
let strarr2 = str2.split("").sort()



function isAnagrame(arr, arr2) {
   
    if (arr.length === arr2.length) {
        let res = arr.every((val) => arr2.includes(val))
        return res
    }
    else
        return false;
}

console.log(isAnagrame(strarr1, strarr2));

//An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are anagram of each other.

var firstWord = "Mary";
var secondWord = "Army";

isAnagram(firstWord, secondWord); // true

function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}
console.log("------------------------------xxxxxxxxxxxxxxxxxxxx-------------------");

//what will be the output of the following code.
var y = 1;
if (function f() { }) {
    console.log(typeof f);
  y += typeof f;
}
console.log(y);

console.log("------------------------------xxxxxxxxxxxxxxxxxxxx-------------------");

let sym= Symbol()
console.log(typeof ([]));
console.log(typeof ({}));
console.log(typeof (()=>{}));
console.log(typeof (function(){}));
console.log(typeof (sym));

//what will be the output of the following code.
console.log("------------------------------xxxxxxxxxxxxxxxxxxxx-------------------");


(function() {
    var a = b = 5;
  })();
  
console.log(b);
  
for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
}
console.log("------------------------------xxxxxxxxxxxxxxxxxxxx-------------------");
console.log("------------------------------Palindrome-------------------");

/**
 * A palindrome is a word, sentence, or other types of character sequence that reads the same backward as forward. 
 * For example, “racecar” and “Anna” are palindromes. “Table” and “John” aren’t palindromes,
 *  because they don’t read the same from left to right and from right to left.
 */

let stri = 'racecar'
function isPalindrome(str) {
    let newArr = str.split("").reverse().join("");
    return (str === newArr)?true:false

    }
console.log(isPalindrome(stri));



console.log("------------------------------xxxxxxxxxxxxxxxxxxxx-------------------");

console.log("------------------------------Vowels------------------------------------------");

//count vowels

let vowels = ['a', 'e', 'i', 'o', 'u']

function vowelsCount(str) {
    let vc = str.split("").reduce((acc, curr) => {
        if (vowels.includes(curr)) {
            acc = ++acc;
        }
        return acc;
    },0)
    return vc;
}

console.log(vowelsCount("angel priya"));
console.log("----------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx----------------------------");
