var members =

[

  {

    id: 111,

    name: "Chelsea Foster",

    position: "Intern",

  },

  {

    id: 102,

    name: "Aggie Sparling",

    position: "Employee",

  },

  {

    id: 123,

    name: "Timmy Matthews",

    position: "Intern",

  },

  {

    id: 66,

    name: "Emmet Foster",

    position: "Employee",

  }

];


const Interns=members.filter((val)=>val.position==="Intern")
const Employees=members.filter((val)=>val.position==="Employee")

console.log(Interns);
console.log(Employees);

console.log("----------------------xxxxxxxxxxxxxxxxxxxxx----------------------");

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
/**
 * FILTER
Get characters with mass greater than 100
Get characters with height less than 200
Get all male characters
Get all female characters
 */
const massGreaterThan100=characters.filter((val)=>val.mass>100)
console.log(massGreaterThan100);
console.log("----------------------xxxxxxxxxxxxxxxxxxxxx----------------------");

const  heightLessThan200=characters.filter((val)=>val.height<200)
console.log(heightLessThan200);
console.log("----------------------xxxxxxxxxxxxxxxxxxxxx----------------------");

const malech=characters.filter((val)=>val.gender=='male')
const femalech=characters.filter((val)=>val.gender=='female')
console.log(malech);
console.log("----------------------xxxxxxxxxxxxxxxxxxxxx----------------------");

console.log(femalech);