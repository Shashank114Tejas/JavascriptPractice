var members =
[
  {
    id: 111,
    name: "Chelsea Foster",
    workExp: 7,
    deptExp: 6,
    isPermanent: true,
  },
  {
    id: 102,
    name: "Aggie Sparling",
    workExp: 13,
    deptExp: 10,
    isPermanent: false,
  },
  {
    id: 123,
    name: "Timmy Matthews",
    workExp: 23,
    deptExp: 15,
    isPermanent: false,
  },
  {
    id: 66,
    name: "Emmet Foster",
    workExp: 22,
    deptExp: 9,
    isPermanent: true,
  },
  {
    id: 89,
    name: "Brent Dolan",
    workExp: 16,
    deptExp: 12,
    isPermanent: true,
  },
];

// we want the total score of permanent employees only, we will first filter out the non-permanent members:
const score=members.filter((val)=>val.isPermanent==true)
.map((val)=>val.workExp+val.deptExp)
.reduce((acc,val)=>acc+=val,0)

console.log(score);
console.log("----------------------xxxxxxxxxxxxxxxxxxxxxxx--------------------");

/**Sum of every positive element
     * Array.prototype.filter()
       Array.prototype.reduce()
     * 
     If the given input is an array of numbers, return the sum of all the positives ones. 
      If the array is empty or there aren't any positive numbers, return 0.
     */

      const input2 = [1, -4, 12, 0, -3, 29, -150];

      const totalSum=input2.filter((val)=>val>-1).reduce((acc,val)=>acc+=val,0)
      console.log(totalSum);

      console.log("----------------------xxxxxxxxxxxxxxxxxxxxxxx--------------------");


      /**
       * Calculate median and mean
       * Array.prototype.reduce()
         Array.prototype.sort()
         Math.abs()
         Calculate the mean and median values of the number elements from the input array.
       */

         const input3 = [12, 46, 32, 64];

         const meanAndMedian=input3.sort().reduce((acc,val)=>acc+=(val),0)/input3.length

         console.log(`{mean:${meanAndMedian}}`);
         console.log("----------------------xxxxxxxxxxxxxxxxxxxxxxx--------------------");
/**
 * Get name initials
 * Array.prototype.map()
String.prototype.split()
String.prototype.join()
The given input is a string of multiple words with a single space between each of them.
 Abbreviate the name and return the name initials.
 const input = "George Raymond Richard Martin";
Result
"GRRM";
 */
const bigName = "George Raymond Richard Martin";

const final=bigName.split(" ").map((val)=>val[0]).join("")
console.log(final);
console.log("----------------------xxxxxxxxxxxxxxxxxxxxxxx--------------------");

/**
 * Age difference from the youngest and oldest
Find the difference in age between the oldest and youngest family members,
 and return their respective ages and the age difference.

Helpful links
Array.prototype.map()
Math.min()
Math.max()
 */
const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const sorted=(a,b)=>(a.age-b.age)
const confSort=input.sort(sorted)
console.log(confSort);

const ages = input.map((person) => person.age);
console.log([Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]);
console.log("----------------------xxxxxxxxxxxxxxxxxxxxxxx--------------------");

/**
 * High performing students
You are given an array of objects representing a group of students,
 each with a name and an array of test scores. 
Your task is to use map, filter, and reduce to calculate the average test score for
 each student, and then return an array of objects containing only the students who have
  an average score above 90.
 */

  const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "David", scores: [100, 100, 100] }
  ];

// Use map to calculate the average test score for each student
const studentAverages = students.map(student => {
  const sum = student.scores.reduce((acc, score) => acc + score);
  return { name: student.name, average: sum / student.scores.length };
});

// Use filter to only select students with an average above 90
const highPerformers = studentAverages.filter(student => student.average > 90);

console.log("----------------------xxxxxxxxxxxxxxxxxxxxxxx--------------------");
/**
 * High Priced Product Categories
You are given an array of objects representing a collection of products,
 each with a name, price, and category.
  Your task is to use map, filter, and reduce to calculate the average price of products
   in each category, and then return an array of objects containing only the categories 
   that have an average price above 50.

Helpful links
Array.prototype.reduce()
Array.prototype.push()
Array.prototype.keys()
Array.prototype.map()
Array.prototype.filter()
 */
const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];











