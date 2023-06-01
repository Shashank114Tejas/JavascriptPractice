var employees = [
  {
    id: 111,

    name: "Chelsea Foster",

    years: 7,
  },

  {
    id: 102,

    name: "Aggie Sparling",

    years: 13,
  },

  {
    id: 123,

    name: "Timmy Matthews",

    years: 23,
  },

  {
    id: 119,

    name: "Emmet Foster",

    years: 22,
  },
];

//get the total years of experience

const total=employees.reduce((acc,emp)=>acc+=emp.years,0)

console.log(total);
console.log("-------------------------------xxxxxxxxxxxxxxxxxxxx--------------------");
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

/**REDUCE
Get the total mass of all characters
Get the total height of all characters
Get the total number of characters in all the character names
Get the total number of characters by eye color (hint. a map of eye color to count) */

const totalMass=characters.reduce((acc,curr)=>acc+=parseInt(curr.mass),0)
 const totalHeight=characters.reduce((acc,curr)=>acc+parseInt(curr.height),0)
 //const totalHeight = characters.reduce((acc, curr) => acc + parseInt(curr.height), 0);
 const totalNoOfCharactersInName=characters.reduce((acc,curr)=>acc+=curr.name.length,0)


//Get the total number of characters by eye color (hint. a map of eye color to count) 
const totalEyes=characters.reduce((acc,curr)=>{
  if(acc[curr.eye_color])
  {
acc[curr.eye_color]= ++acc[curr.eye_color];
  }
  else
  {
    acc[curr.eye_color]=1
  }
  return acc;
},{})
console.log("-----------xxxxxxxxxxxxxxxxxx----------------");
console.log("-----------xxxxxxxxxxxxxxxxxx----------------");

console.log(totalEyes);

console.log("-----------xxxxxxxxxxxxxxxxxx----------------");
console.log("-----------xxxxxxxxxxxxxxxxxx----------------");

console.log(totalMass);
console.log(totalHeight);
console.log(totalNoOfCharactersInName);

console.log("-----------xxxxxxxxxxxxxxxxxx----------------");

//find max
const arr=[1,2,3,4,5,6,7,8,9]

const max=arr.reduce((acc,curr)=>{
  if(curr>acc)
  {
    acc=curr;
  }
  return acc;
  },0)
//curr>acc?acc=curr:acc=acc
console.log(max);




