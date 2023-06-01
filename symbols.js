//unique identifiers
//its mainly use is to provide unique identity for objects keys.

const s1 = Symbol()// incomplete symbol constructor

console.log(s1);
console.log(typeof s1);

const s2 = Symbol()
console.log(s1===s2);

const s3 = Symbol("third symbol")
console.log(s3 === s2);
//objects

const name=Symbol("myOfficialName")


let person = {
    [name]: 'Shashank',
    age: 30,
    city:"Dhanbad"
}

person.name = 'tejas'

console.log(person);

for (let value in person) {
    console.log(person[value]);
}
/**30
Dhanbad
tejas */

for (let v of Object.values(person))
{
    console.log(v);
}
console.log("------------xxxxxxxxxx----------");
console.log(Object.getOwnPropertyNames(person));
console.log("------------xxxxxxxxxx----------");

console.log(Object.getOwnPropertyDescriptor(person));
console.log("------------xxxxxxxxxx----------");

console.log(Object.getOwnPropertyDescriptors(person));
console.log("------------xxxxxxxxxx----------");
console.log(Object.getOwnPropertySymbols(person));

//assigning same values to two symbols
//sharing symbols among files
//getting it from global scope(or global registry)
//Symbol.for-->Returns a Symbol object from the global symbol registry matching the given key if found. Otherwise, returns a new symbol with this key.
let sym1=Symbol.for("mySymbol 1")
let sym2 = Symbol.for("mySymbol 1")

console.log(sym1 === sym2);

let sym3=Symbol.for("mySymbol 3")
let sym4 = Symbol.for("mySymbol 4")
console.log(sym3 === sym4);

//retriveing keys
console.log(Symbol.keyFor(sym1));//mySymbol 1
