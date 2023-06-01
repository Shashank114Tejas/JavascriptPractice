

const arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', { name: "palash" }, { lastname: 'soni' }, function () { }, null, undefined, NaN]

const num = arr.filter((val) => {
    if (typeof(val) == 'number') {
        return val;
    }
})

console.log(num);
// 1.How can you use the filter function to extract all the elements in an array 
// * that are not undefined, null or NaN?
// let arr = [1, 2, null, 3, undefined, 4, NaN, 5];
// // Output: [1, 2, 3, 4, 5]
// */
let arr2 = [1, 2, null, 3, undefined, 4, NaN, 5,'a'];


const num12 = arr2.filter((valu) => {
    if (typeof(valu) !== 'null' && typeof(valu) !== 'NaN' && typeof(valu) !== 'undefined') {
        return valu;
    }
})
console.log(num12);
console.log(typeof (NaN));//number
console.log(isNaN(NaN));//true
console.log(isNaN(undefined));//true



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
console.log("--------------------------xxxxxxxxxxxxxxxxxx---------------");

const names = ['palash', 'sravanthi', 'prathyusha', 'shashank']

for (let name of names.values())
{
    console.log(name);
}

for (let [,{name,height,mass,eye_color,gender}] of characters.entries()) {
    console.log([name,height,mass,eye_color,gender]);
}

const test = ['name', { firstName: 'shawn', lastname: 'micheals' }];

for (let value of Object.values(test[1]) ) {
    console.log(value);
}

const movieScript = new Map([
    [0, 'intro'],
    [5, 'song'],
    [15, 'action'],
    [35, 'song'],
    [68, 'interval'],
    [78, 'action'],
    [89, 'credits'],
]);
 
const uniqueScenes = [... new Set([...movieScript.values()])];
console.log(uniqueScenes);

const arr1 = [1, 2, 3, 4]
const arr21 = [4, 3, 2, 1]

const res= arr1.every((val)=>arr21.includes(val))
console.log(res);

console.log("------------------------------xxxxxxxxxxxx----------------------------");

console.log("------------------------------xxxxxxxxxxxx----------------------------");

function simple() {
    let x = 0;
    x++;

}
simple()
simple()

function closure() {
    var y = 0;
    function inner() {
        y++;
    }
    return inner;
}

let ref = closure();
ref();
ref();

console.log("------------------------------xxxxxxxxxxxx----------------------------");

function outer() {
    var x;
    function getValueOfX() {
        return x;
    }
    function increment() {
        x++;
    }
    function init() {
        x = 0;
    }
    init()
    return {
        getValueOfX,increment
    }
}

let ref1 = outer()
console.log(ref1.getValueOfX());
ref1.increment()
console.log(ref1.getValueOfX());



let arr5 = [1, 2, null, 3, undefined, 4, NaN, 5];

for (let i = 0; i < arr5.length; i++) {
    if (arr[i]) {
        console.log(arr[i])
    }
}