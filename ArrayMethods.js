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

console.log("--------------------PUSH--------------------");
//push- adding an element at last
//return type- length of an array
//alters the original array
const nums=[1,2,3,4,5,6,7,8,9]
console.log(nums.push(101)); //10
console.log(nums);//[1,2,3,4,5,6,7,8,9,10]

console.log("--------------------POP--------------------");
//pop- removing an element at last
//return type- popped element
//alters the original array

const nums1=[1,2,3,4,5,6,7,8,9]
console.log(nums1.pop()); //9
console.log(nums1);//[1,2,3,4,5,6,7,8]

console.log("--------------------UNSHIFT--------------------");
//unshift- add an element at the beggining
//return type- new length of an array
//alters the original array
const nums2=[1,2,3,4,5,6,7,8,9]
console.log(nums2.unshift(22)); //
console.log(nums2);//[22,1,2,3,4,5,6,7,8,9]

console.log("--------------------SHIFT--------------------");
//shift- remove an element from the beggining
//return type- removed element
//alters the original array
const nums3=[1,2,3,4,5,6,7,8,9]
console.log(nums3.shift()); //1
console.log(nums3);//[2,3,4,5,6,7,8,9]

console.log("--------------------REVERSE--------------------");
//reverse- reverse the whole array
//return type- reversed array
//alters the original array
const nums4=[1,2,3,4,5,6,7,8,9]
console.log(nums4.reverse()); //[9, 8, 7, 6, 5,4, 3, 2, 1]
console.log(nums4);//[9, 8, 7, 6, 5,4, 3, 2, 1]

 console.log("--------------------SPLICE--------------------");
//splice- add new items in the array
//return type- return the popped elements
//alters the original array
const nums5=[1,2,3,4,5,6,7,8,9]
console.log(nums5.splice(2,2,33,44,55));//[ 3, 4 ]
console.log(nums5);//[1,2,33,44,55,5,6,7,8,9]

