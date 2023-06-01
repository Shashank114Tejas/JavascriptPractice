//Find()- method returns the value of the first array element that passes a test function.

const numbers = [4, 9, 16, 25, 29];
console.log(numbers.find(myFun));

function myFun(value,index,arr)
{
  return (value>18)
}
console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------");
const numbers2 = [4, 9, 16, 25, 29];
console.log(numbers2.indexOf(25));
console.log(numbers2.includes(29));

console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------");

//max
const nums=[1,2,3,4,5,6,7,8]
console.log(Math.max.apply(null,nums));
console.log(Math.min.apply(null,nums));
console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------");





// Write a JavaScript function to check whether an `input` is an array or not. 

function is_array(variable){
   return Array.isArray(variable)
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------");
//Write a JavaScript function to clone an array.

function array_Clone(arr)
{
    let clonedArr=[]
//     for(let key of arr)
//     {
//       while(typeof(key!=="undefined"))
//       {
//         clonedArr.push(key)
//       }
//       return clonedArr
//     }
// }

arr.forEach((n)=>{clonedArr.push(n)})
return clonedArr;
}
console.log(array_Clone([1,2,{name:'teju'}]));
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------");
//Write a JavaScript function to get the first element of an array.
// Passing the parameter 'n' will return the first 'n' elements of the array

function first(arr,n){
    let elements=[]

    if(n===undefined)
    return arr[0]
    else{
    for(let i=0;i<=n-1;i++)
    {
      elements.push(arr[i])
    }

    return elements;
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------");
//Write a JavaScript function to get the last element of an array.
// Passing the parameter 'n' will return the last 'n' elements of the array
//not correct
// function last(arr,n){
//     let elements=[]
//     if(n==undefined)
//     {
//         return arr[arr.length-1]
//     }
//     else
//     {
//       for(let i=arr.length-1;i<n;i--)
//       {
//         elements.push(arr[i])
//       }
//       return elements;
//     }
// }
// console.log("last"+last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------");
//Write a simple JavaScript program to join all elements of the following array into a string
 const myColor = ["Red", "Green", "White", "Black"];
//a.join(); // 'Wind,Water,Fire'
 console.log(myColor.join());
 console.log(myColor.join("+"));
 console.log(myColor);

console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------");

 //Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
 // For example if you accept 025468 the output should be 0-254-6-8.

 //Write a JavaScript program to sort the items of an array
const compare=(a,b)=>a-b;

function sorted(arr)
{
 return arr.sort(compare)
}

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

console.log(sorted(arr1)); sorted(arr1)
console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------");

// Write a JavaScript program to find the most frequent item in an array.

var arr2=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var total = 1;
var count = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                count++;
                if (total<count)
                {
                  total=count; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +total +" times ) ") ;

// Write a JavaScript program that accepts a string as input and swaps the case of each character. 
//For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------");

//Write a JavaScript program to remove duplicate items from an array 
//(ignore case sensitivity)

const arr=[1,2,2,3,4,5,3,4,6,7,8,9,8,9] 
//  a = new Set(arr)
// console.log(a);

// const getUniqueValues=(array)=>(
//   array.filter((currentValue,index,arr)=>(
//      arr.indexOf(currentValue)===index// indexOf returns the first instance of a value 
//      ))
// );
// console.log(getUniqueValues(arr)); 
const getUniqueValues=(array)=>(
  array.reduce((acc,currentValue)=>(
  acc.includes(currentValue)?acc:[...acc,currentValue]
     ),[])
);
console.log(getUniqueValues(arr)); 



