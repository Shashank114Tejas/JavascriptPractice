/**
 * writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
 */
//console.log(obj.readOnlyProp); // Output: read only value
//obj.readOnlyProp = 'new value'; // Throws an error in strict mode or silently fails in non-strict mode


const obj1 = {
    name: 'surya',
    fame: "actor",
    toString() { console.log("hello!"); }
};

console.log(Object.getOwnPropertyDescriptors(obj1));

Object.defineProperty(obj1, "name", {
    writable: false,
    enumerable: true,
    configurable:false
},)

console.log(obj1.name);
obj1.name="shashank"
console.log(obj1.name);


for (let key in obj1)
{
    console.log(key);
    }

console.log(Object.keys(obj1));
delete obj1.name




const newperson = {
    name: 'palash',
    fame: 'talash',
    home:'kailash'
}
console.log(Object.getOwnPropertyDescriptors(newperson));

Object.defineProperties(newperson, {
    name: { writable: false, enumerable: true, configurable: true },
    fame: { writable: false, enumerable: false, configurable: true },
    home: { writable: false, enumerable: true, configurable: true },
})

for (let key in newperson) {
    console.log(key);
}
