const address = {
    houseNo: 123,
    city: 'Delhi',
    pincodes:[111111,111112,111113]
  }
  
  const student = {
    fullname: {
      firstname: 'David',
      lastname:'warner'
    }
  }
  
  const { fullname: { firstname, lastname } }=student
  console.log(firstname);
  console.log(lastname);
  
  const test = { random: [100, { message: 'hello' }] }
  
  let { random: [, { message }] } = test
console.log(message);
  
console.log("---------------------xxxxxxxxxxxxxxx----------------");
let nums = [1, [0, 1]];
let nums2 = [...nums, 7, ...nums[1]]//1,[0,1],7,0,1

console.log(nums2);
console.log("---------------------xxxxxxxxxxxxxxx----------------");

const students = ['john', 'khali', 'HHH', 'Bigshow']

for (let student of students.entries())
{
    console.log(student);
}
for (let [k,v] of students.entries())
{
    console.log(k+" : "+v);
}
console.log("---------------------xxxxxxxxxxxxxxx----------------");

const test1 = ['name', { firstname: 'shawn', lastname: 'micheals' }]
//loop through values
// for (let [,{firstname,lastname}] of test1.entries())
// {
// console.log(firstname);
//     console.log(lastname);}
    for (let value of Object.values(test1[1]))
    {
        console.log(value);
        }

console.log("---------------------xxxxxxxxxxxxxxx----------------");
//tricks with objects

let firstName = 'peter'

const bio = {
    //adding firstname
    firstName,
    age: 30,
    gender: "male",
    //adding function directly

    greet() {
        console.log("hello peter");
    }
    
}
console.log(bio);

let key = 'numbers';
let greetings = ['hi', 'hello', 'welcome']

const newobj = {
    //property will always be string
    //in square brackets we can write any expression which will return string.
    //key is a variable //console.log(newobj);//{ numbers: [ 1, 2, 3, 4 ] }
    [greetings[1].toUpperCase()]: [1, 2, 3, 4],//{ HELLO: [ 1, 2, 3, 4 ] }
    [500]:[20,30,40,50]//500 will be converted into string
}
console.log(newobj);

const firstNamee = 'john'
const age = 30;

const person = { [2023 - age]: firstNamee };//'1993':'john'
console.log(person);
console.log("---------------------xxxxxxxxxxxxxxx----------------");
//Nullish coalecsing ??
// left side expression is null or undefined ?? right side expression will execute
//// left side expression is not null or undefined ?? right side expression will not execute

const permanentAddress = {
    houseNo:123,
    city: 'Dhanbad',
    pincodes: [111111, 111112, 111113],
  //state='UP'
    
}

let state=permanentAddress.state ?? 'Jharkhand'

console.log(state);

//exercise//empty string or hello
let value = '' ?? "hello"
console.log(value);
console.log("---------------------xxxxxxxxxxxxxxx----------------");

let studentss = [
    {
        firstName: "john",
        lastname:'cena'
    }
]

console.log(studentss[0]?.firstName??"hello");

console.log("---------------------xxxxxxxxxxxxxxx----------------");
//set- similar to array but contains only unique values
const numbs=[1,2,3,3,4,5,6,7,8,4,3,2,4,5]
let myset = new Set(numbs)
let myset2 = new Set("bookeeper")

console.log(myset);
console.log(myset2);
console.log(myset2.has("f"));
console.log(myset.has(9));
console.log(myset.size);
//add,delete,clear,

const valset = new Set([..."hi", 0, 'h'])
console.log(valset.size);
console.log(valset);
console.log("---------------------xxxxxxxxxxxxxxx----------------");
//Map- similar to objects in terms of key and value but very differnt all together
// in keys we can store any type of data- number, string, boolean, function, even html
// in onjects the keys have to be of string only

const myMap = new Map([
    ['firstname', 'john'],
    ['lastname', 'cena'],
    [400, 'score'],
    [() => { }, 'hello']
])

console.log(myMap);
console.log(myMap.size);
console.log(myMap.set(true,'married'));
console.log(myMap.get(true));
console.log("---------------------xxxxxxxxxxxxxxx----------------");

for (let key of myMap)// returns array in the form of key and value//[ 'firstname', 'john' ]
{
    console.log(key);
    }
    console.log("---------------------xxxxxxxxxxxxxxx----------------");

    //we can destructure

    for (let [key,value] of myMap)
{
    console.log(key,value);
    }
    console.log("---------------------xxxxxxxxxxxxxxx----------------");
console.log("---------------------Converting object into map----------------");
    
const obj = {
    firstName: 'shashank',
    lastname: 'kumar',
    age:30
}

const myNewMap = new Map(Object.entries(obj))
console.log(myNewMap);
//now if we want to make an array of keys or values of a Map
//it returns map iterator [Map Iterator] we can use spread operator and put it inside an array
console.log(myNewMap.keys());//[Map Iterator] { 'firstName', 'lastname', 'age' }
console.log([...myNewMap.values()]);//[ 'shashank', 'kumar', 30 ]
console.log("---------------------xxxxxxxxxxxxxxx----------------");

//exercise

const movieScript = new Map([
    [0, 'intro'],
    [5, 'song'],
    [15, 'action'],
    [35, 'song'],
    [68, 'interval'],
    [78, 'action'],
    [89, 'credits'],
]);

let uniqueScenes = [...new Set([...movieScript.values()])]
console.log(uniqueScenes);

    