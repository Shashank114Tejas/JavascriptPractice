
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
 * EVERY
Does every character have blue eyes?
Does every character have mass more than 40?
Is every character shorter than 200?
Is every character male?
 */

const hvblueEyes=characters.every((val)=>val.eye_color=='blue')
console.log(hvblueEyes);
const hvMassMoreThan40=characters.every((val)=>val.mass>40)
console.log(hvMassMoreThan40);
const hvHeightLessThan200=characters.every((val)=>val.height<200)
console.log(hvHeightLessThan200);
const isMale=characters.every((val)=>val.gender=='male')
console.log(isMale);