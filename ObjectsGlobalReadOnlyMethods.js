const animal = {
    a1: "dog",
    a2:"cat"
}

//  Object.preventExtensions(animal)//modification and deletation is ok but adding new properties is forbidden;
// console.log(Object.isExtensible(animal));

// Object.freeze(animal)//addition deletion modification is forbidden- writable-configurable:false
// animal.a2 = "cat;"

// animal.a3 = "lion"

// console.log(animal);
// console.log(Object.isFrozen(animal));

Object.seal(animal)//addition deletion is forbidden- configurable false for existing properties
// animal.a2 = "cat;"
// animal.a3 = "lion"
// console.log(animal);
// console.log(Object.isSealed(animal));

console.log(animal);
animal.a1="lion"
delete animal.a2
console.log(animal);