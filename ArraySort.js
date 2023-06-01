/**
 * The sort() method sorts the elements of an array in place and
 *  returns the reference to the same array, now sorted. 
 * The default sort order is ascending, built upon converting the elements into strings,
 *  then comparing their sequences of UTF-16 code units values.
 */

const arr=[1,101,201,22,32,2,9,99,300,4,5]
console.log(arr.sort());//[ 1, 101, 2, 201, 22, 300,  32, 4,   5,  9, 99]
console.log(arr);//[  1, 101, 2, 201, 22, 300,  32, 4,   5,  9,  99]

const compare=(a,b)=>a-b;
console.log(arr.sort(compare));//1,  2,  4,   5,   9,   22, 32, 99, 101, 201,  300]

const names=['sravanthi','palash','prathyusha','dular','ayush','shashank']
console.log(names.sort());//[ 'ayush', 'dular', 'palash', 'prathyusha', 'shashank', 'sravanthi' ]
console.log(names.sort(compare));//[ 'ayush', 'dular', 'palash', 'prathyusha', 'shashank', 'sravanthi' ]

console.log("----------------xxxxxxxxxxxxxxxxxxxxxxx------------------------");
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
 * SORT
Sort by name
Sort by mass
Sort by height
Sort by gender


 */
/**
 * 
 * The sort() method takes a comparison function as an argument, 
 * which compares two elements of the array at a time and
 *  returns a value indicating their relative order. 
 * If the value returned is negative, 
 * the first element is sorted before the second. 
 * If it's positive, the second element is sorted before the first.
 *  If it's zero, the order remains unchanged.
 */

const sortByName=(a,b)=>{
    if(a.name<b.name)
    return -1
    else if(a.name>b.name)
    return 1
    else
    return 0
}
    console.log(characters.sort(sortByName));
console.log("-------------------xxxxxxxxxxxxxxxxxx------------------------");

const sortByMass=(a,b)=>(a.mass-b.mass)
    console.log(characters.sort(sortByMass));
    console.log("-------------------xxxxxxxxxxxxxxxxxx------------------------");
  
const sortByHeight=(a,b)=>(a.height-b.height)
console.log(characters.sort(sortByHeight));
console.log("-------------------xxxxxxxxxxxxxxxxxx------------------------");

const sortByGender=(a,b)=>a.gender-b.gender;
console.log(characters.sort(sortByGender));