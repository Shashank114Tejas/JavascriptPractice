/**
 * here are the nine essential array methods that mutate the original array:

.push() — Adds a new item as the last item of the array.
.pop() — Removes the last item of the array.
.unshift() — Adds a new item as the first item of the array.
.shift() — Removes the first item of the array.
.reverse() — Reverses the order of the array.
.splice() — Removes/replaces item(s) in the array.
.sort() — Re-orders the items in the array based on their Unicode code points.
.copyWithin() — Copies one part of the array and puts it on another part of the same array.
.fill() — Changes some or all items in the array into the value being passed in.
 */


//push- length return //add element at the last
let arr=[1,2,3,4,5]
console.log(arr.push(7,8,9)); 
console.log(arr);
console.log("-------------------------xxxxxxxxxxxxx--------------------");

//pop
let arr2=[1,2,3,4,5]
console.log(arr2.pop()); 
console.log(arr2);
console.log("-------------------------xxxxxxxxxxxxx--------------------");

//shift-
let arr3=[1,2,3,4,5]
console.log(arr3.shift()); 
console.log(arr3);
console.log("-------------------------xxxxxxxxxxxxx--------------------");

//unshift
let arr4=[1,2,3,4,5]
console.log(arr4.unshift(11,12,13)); 
console.log(arr4);
console.log("-------------------------xxxxxxxxxxxxx--------------------");


console.log(arr4.reverse())
console.log(arr4);

 arr4.fill("a",0,2)
 console.log(arr4);

//splice
//splice(0,2)

console.log(arr4.splice(0,2,111,222,333));
console.log(arr4);

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

console.log(characters.sort((a,b)=>b.mass-a.mass));

console.log(characters.sort((a,b)=>{
    if(a.name<b.name)
    return -1
    else if(a.name>b.name)
    return 1
    else
    return 0

})); 


console.log(characters.some((val)=>val.mass>50));

const array=[1,2,3,4,5,6,7,8,9]

const filtered=array.filter((val)=>val%2).map((val)=>val*3).reduce((acc,current)=>acc+current,0)
console.log(filtered)
console.log(array);



