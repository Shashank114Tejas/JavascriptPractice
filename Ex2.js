console.log("--------------------------Destructuring------------------------");

//Destructuring
const test = { random: [100, { message: 'hello' }] }

//Exercise 1
const { random: [, { message }] } = test;
console.log(message);
console.log("--------------------------Spread operator------------------------");
//Spread operator
const nums = [1, 2, 3, 4]

const newNums = [...nums, 5, 6]
console.log(newNums);

const nums1 = [1, 2, 3, 4]
const nums2 = [1, 2, 3, 4]
console.log([...nums1, ...nums2]);

//objects are not iterable
let student = {
    name: 'sk',
    gender:'male'
}

student = { ...student, age: 30 }
console.log(student);
student = { ...student, age: 30, name: 'shashank'}
console.log(student);

let [x, y, ...rest] = newNums
console.log(x);
console.log(y);
console.log(rest);

//Exercise 2
let numss = [1, [0, 1]];
let numss1 = [...numss, 7, ...numss[1]]//1,[0,1],7,0,1

console.log(numss1);//[ 1, [ 0, 1 ], 7, 0, 1 ]

console.log("-------------------For of loop(works on iterables)---------------------");
//for of loop
//works on iterables
const students = ['john', 'khali', 'HHH', 'Bigshow']
for (let key of students) {
    console.log(key);
}
//here we are not able to access the index so we can use .entries()

for (let key of students.entries()) {
    console.log(key);//[ 0, 'john' ] [ 1, 'khali' ] [ 2, 'HHH' ] [ 3, 'Bigshow' ]
}

//we can also destructure
for (let [k,v] of students.entries()) {
    console.log(k+" : "+v);//0 : john 1 : khali  2 : HHH  3 : Bigshow
}

let str = "Shashank"

for (let key of str) {
    console.log(key);
}

//exercise 3
const test1 = ['name', { firstname: 'shawn', lastname: 'micheals' }]

//Object.values(test1[1])- because objects are not iterable
for (let val of Object.values(test1[1]))
{
    console.log(val);
}

