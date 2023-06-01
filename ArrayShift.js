/**
 * The shift() method removes the first element from an array and
 *  returns that removed element. 
 * This method changes the length of the array.
 */

const arr=[1,2,3,4,5,6,7,8]
console.log(arr.shift());//1
console.log(arr);//[2,3,4,5,6,7,8]


const names=['tejas','palash','shashank','soni','dular']
 while(typeof(i=names.shift())!=="undefined")   
 {
   console.log(i);
 }
