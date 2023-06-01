let myMap = new Map()
myMap.set(0, "alpha")
myMap.set(2, "beta")
myMap.set(1, "gama")
myMap.set(4, "drama")

console.log(myMap);

for (let key of myMap.keys())
{
    console.log(key);
}


for (let value of myMap.values())
{
    console.log(value);
}

for (let [key, value] of myMap)
{
    console.log(`key is ${key} and value is ${value}`);
}

myMap.forEach((value, key) => { console.log(`key is: ${key} and value is: ${value} `); })

console.log(myMap.entries());
console.log(myMap.size);
console.log(myMap.delete(2));
console.log(myMap.get(2), myMap.get(1));
console.log(myMap.has(3)); 
console.log(myMap.clear());
console.log(myMap);
