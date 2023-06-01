// Write an arrow function expression called greet().
//It should accept a single argument representing a person's name.

const greet=(name)=>console.log(`hello ${name}`);

greet('Shashank')

//Q2 Write an arrow function named arrayAverage
//that accepts an array of numbers and returns the average of those numbers

const avg = (arrOfNums) => (arrOfNums.reduce((acc, curr) => acc + curr, 0) / arrOfNums.length)
console.log(avg([1, 2, 3, 4, 5]));

const average = (arr) => {
    let sum = 0
    { 
        arr.forEach((val) => {sum= val + sum });
}
    console.log(sum/arr.length);
}
average([1, 2, 3, 4, 5])

/**
 * Q3 Convert the following JavaScript function declaration to arrow function syntax.
function counterFunc(counter) {
  if (counter > 100) {
    counter = 0;
  }else {
    counter++;
  }
  
  return counter;
}
 */

let counterFunc = (counter) => counter >= 100 ? counter = 0 :counter= ++counter;
console.log(counterFunc(99));

/**
 *  Write an arrow function for the following JavaScript function:

function nameAge(name, age) {
  console.log("Hello " + name);
  console.log("You are " + age + " years old");
}
 */
const nameAge=(name,age)=>{console.log("Hello " + name);
    console.log("You are " + age + " years old");
}

nameAge('shashank', 30)

//Q5 Write an arrow function named dashTwixt2Evens that accepts a number and
//inserts dashes (-) between two even numbers.
//dashTwixt2Evens(225468) //"2-254-6-8"
//dashTwixt2Evens(8675309) //"8-675309"

const dashTwixt2Evens = (number) => {
   
    //convert number to array
    let arr = [];
    let temp = number;
    let quotient, remainder;
    while(temp!=0){
      remainder = temp%10;
      temp = Math.floor(temp/10);
      arr.unshift(remainder);
    }
     
    //Add dash between two even numbers
    let indexPosition = [];
    for(let i=0; i<arr.length-1; i++){
      if(arr[i]%2 === 0){
        if(arr[i+1]%2 === 0){
          arr.splice(i+1, 0, "-");
          i=0
        }
      }
    }
    return arr.join("");
}
  

/**
 * Write an arrow function named sumEvens that accepts an array of numbers 
 * //and returns the sum of the even numbers in the array. Use a for...of statement.
 */

const sumEvens = (numarr) => {

    let sum=0
    for (let key of numarr) {
        if (key % 2 === 0) {
           sum+=key
       }
    }
    return sum;
}

console.log(sumEvens([1, 2, 3, 4, 5, 6]));

// How to return an empty object from an arrow function in JavaScript?

const returnEmptyObj = () => {
    return {}
}

console.log(returnEmptyObj());