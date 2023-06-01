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

const names = characters.map((val) => val.name)
const heights = characters.map((val) => val.height)
const nameAndHeights = characters.map((val) => {
    return (val.name+" : "+val.height)
})
const firstnames = characters.map((val) => val.name.split(" ")[0])

//map
console.log(names);
console.log(heights);
console.log(nameAndHeights);
console.log(firstnames);
  
//reduce
const totalMass = characters.reduce((acc, curr) => acc + parseInt(curr.mass), 0)
const totalHeight = characters.reduce((acc, curr) => acc + parseInt(curr.height), 0)
const totalNameCharacters = characters.reduce((acc, curr) => {
    ((curr.name).replaceAll(" ", ""))
    return acc + curr.name.length
},0)

console.log(totalMass);
console.log(totalHeight);
console.log(totalNameCharacters);

const eyecount = characters.reduce((acc, curr) => {
    if (acc[curr.eye_color]) {
        acc[curr.eye_color]+=1
    }
    else {
        acc[curr.eye_color]=1 
    }
    return acc;
},{})


console.log(eyecount);

//filter
const massGreterThan100 = characters.filter((val) => val.mass > 100)
const heightLessthan200 = characters.filter((val) => val.height < 200)
const malech = characters.filter((val) => val.gender =='male')
const femalech = characters.filter((val) => val.gender =='female')
console.log(massGreterThan100);
console.log(heightLessthan200);
console.log(malech);
console.log(femalech);

//sort
const sortByName = characters.sort((a, b) => {
    if (a.name < b.name) {
        return-1
    }
    else if (a.name > b.name) {
        return 1
    }
    else
        return 0
})

console.log(sortByName);

const sortByMass=characters.sort((a,b)=>a.mass-b.mass)
console.log(sortByMass);

const sortByHeight = characters.sort((a, b) => parseInt(a.height - b.height))
console.log(sortByHeight);

const sortByGender = characters.sort((a, b) => a.gender - b.gender)
console.log(sortByGender);

//every
const blueEyes = characters.every((val) => val.eye_color == 'blue')
const mass = characters.every((val) => val.mass >40)
const male = characters.every((val) => val.gender=="male")
console.log(blueEyes);
console.log(mass);
console.log(male);

//some
const somemale = characters.some((val) => val.gender == 'male')
console.log(somemale);