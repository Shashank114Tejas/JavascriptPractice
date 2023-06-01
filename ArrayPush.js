//add element/s at the last
//Returns the length of an array 
//alter original array
console.log("----------Adding elements to an array------");
const arr=[1,2,3]
console.log(arr.push(4,5,6));//6 
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]

console.log("--------------Merging two arrays-------------");
// using spread operator-/**The spread (...) syntax allows an iterable, such as an array or string,
// to be expanded in places where zero or 
// more arguments (for function calls) or elements (for array literals) are expected.
// In an object literal, the spread syntax enumerates the properties of an object and
// adds the key-value pairs to the object being created. */

const arr1=[1,2,3]
const arr2=[4,5,6]

//console.log(arr1.concat(arr2))//[ 1, 2, 3, 4, 5, 6 ]

console.log(arr1.push(...arr2)); //6
console.log(arr1);//[ 1, 2, 3, 4, 5, 6 ]
console.log(...arr1,...arr2);//1 2 3 4 5 6

console.log("---------------Calling push() on non-array objects--------------");
//not understood
const obj = {
    length: 0,
  
    addElem(elem) {
      // obj.length is automatically incremented
      // every time an element is added.
      [].push.call(this, elem);
    },
  };
  
  // Let's add some empty objects just to illustrate.
  obj.addElem({});
  obj.addElem({});
  console.log(obj.length); // 2
