//property name for destructuring,...rest

const person1 = {
  name: "shashank",
  age: 30,
  food: "fish",
  address: {
    city: "dhanbad",
    state: "jharkhand",
  },
};



console.log("-------------------xxxxxxxxxxxxxxxxx--------------");
const {
  name,
  age = 33,
  address: { city, state },
} = person1;
console.log(name);
console.log(age);
//console.log(address);
console.log(city);
console.log(state);

function getUserDetails({ name, age }) {
  console.log(`user name is : ${name} and his age is: ${age}`);
}

getUserDetails(person1);

delete person1.food;

console.log(person1);

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