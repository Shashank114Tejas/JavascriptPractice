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

/**SOME
Is there at least one male character?
Is there at least one character with blue eyes?
Is there at least one character taller than 200?
Is there at least one character that has mass less than 50? */

const oneMale=characters.some((val)=>val.gender=='male')
console.log(oneMale);
const blueEyes=characters.some((val)=>val.eye_color=='blue')
console.log(blueEyes);
const tallerThan200=characters.some((val)=>val.height>200)
console.log(tallerThan200);
const massLessThan50=characters.some((val)=>val.mass<40)
console.log(massLessThan50);