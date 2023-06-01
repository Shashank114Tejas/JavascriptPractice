let nums = [1, 2, 3, 4, 5, 6]

// nums.unshift([6, 11, 12])
// console.log(nums);//[ [ 6, 11, 12 ], 1, 2, 3, 4, 5, 6 ]


nums.unshift(5, 6)
console.log(nums);

let nums2 = [5, 6, 1, 2, 3, 4, 5, 6];

let uniqueNums = nums2.filter((value, index, self) => {
  return self.indexOf(value) === index;
}).sort((a,b)=>a-b);

console.log(uniqueNums);//[ 5, 6, 1, 2, 3, 4 ]
/**the filter method is used to iterate over each element of the nums array. 
 * The callback function checks if the index of the current element (value) 
 * is equal to the first occurrence of that element in the array (self.indexOf(value)).
 *  If they match, it means the element is unique and should be included in the uniqueNums array.

Note that the indexOf method returns the first index 
at which a given element can be found in the array,
 so it will only match the first occurrence of each unique element. */


 

  


function unshiftUnique(arr,...elements) {
  elements.forEach(element => {
    if (!arr.includes(element)) {
        arr.unshift(element)
      }
    })
}
  
const array = [1, 2, 3, 4, 5, 6]
unshiftUnique(array,6,11,12)
console.log(array);