//find length of an array without using length method
const nums=[1,2,3,4,5,6,7,8,9,10]

function len(arr)
{
    var length=0;
    while(arr[length]!==undefined){
        length++;
    }
    return length;
}
console.log(len(nums)); 
console.log("------------------xxxxxxxxxxxxxxxxxxxx----------------------");

//Multiple ways to print all the elements in the array
const nums1=[1,2,3,4,5,6,7,8,9,10]

for(let key of nums1)
{
    console.log(key);
}
for(let key in nums1)
{
    console.log(nums1[key]);
}
console.log("------------------xxxxxxxxxxxxxxxxxxxx----------------------");
//Finding average and sum of all the elements
const nums2=[1,2,3,4,5,6,7,8,9,10]

const sum=nums2.reduce((acc,curr)=>acc+=curr,0)

console.log(`sum is ${sum} average is ${sum/nums2.length}`);
console.log("------------------xxxxxxxxxxxxxxxxxxxx----------------------");
//Even and odd position array printing
const nums3=[22,3,44,5,66,7,88,9,100]

function oddAndEvenIndexValues(arr,evenorodd)
{
    let oddIndexValues=[]
    let evenIndexValues=[]
   for(let i=0;i<arr.length;i++)
   {
    i%2===0?oddIndexValues.push(arr[i]):evenIndexValues.push(arr[i])
   }
   if(evenorodd=='even')
   {
    return evenIndexValues;
   }
   else
   return oddIndexValues;
}
console.log(oddAndEvenIndexValues(nums3,"even"));
console.log("------------xxxxxxxxxxxxxx----------------");



//How to reverse arrays in JS without using reverse method

const names=['ayush','piyush','ramesh']

let rev=[]
for(let i=0;i<names.length;i++)
{
   rev.unshift(names[i])
}

console.log(rev);
console.log("------------xxxxxxxxxxxxxx----------------");


//remove specific item in an array

function removeSpecificItem(arr,item)
{
    if(arr.includes(item)==true)
    {
        let index=arr.indexOf(item)
        arr.splice(index,1)
    }
    return arr;
}
console.log(removeSpecificItem([1,2,3,4,5,6,7,8,9,10],7));
console.log("------------xxxxxxxxxxxxxx----------------");


//count duplicates in an array
const numbs=[1,2,3,4,5,1,4,2,4,7,9,5]

let count=0
for(let i=0;i<numbs.length;i++)
{
    for(let j=i+1;j<numbs.length;j++)
    {
        if(numbs[i]==numbs[j]){
        count++
        }
    }
}

console.log(count);
console.log("------------xxxxxxxxxxxxxx----------------");


//count no of occrences in an array

function countDuplicates(arr){
   const duplicates= arr.reduce((acc,curr)=>{
        if(acc[curr]){
            acc[curr]=++acc[curr]
            }
            else{
            acc[curr]=1
            }
            return acc;
           },{})
           


           const values=Object.values(duplicates)
           const max_value=Math.max(...values)

           for(let key in duplicates)
           {
            if(duplicates[key]==max_value){
                return key
            }
           }


        }
 
console.log(countDuplicates(["book","took","look","took","book","book","crook"]));

console.log("------------xxxxxxxxxxxxxx----------------");


//filtering numbers from an array
const mixedArr=[1,2,3,4,5,'a','b','c','d','e',{ab:'amitabh bachan'},{cd:'cool dude'},function greet(){console.log("hello world!")},NaN,undefined,null]

const numsArr=mixedArr.filter((val)=>typeof val=='number' && isNaN(val)==false)
const strArr=mixedArr.filter((val)=>typeof val=='string')
const objArr=mixedArr.filter((val)=>typeof val=='object')
const funArr=mixedArr.filter((val)=>typeof val=='function')

console.log(mixedArr.indexOf(undefined));
console.log(isNaN(mixedArr[14]));

console.log(numsArr);
console.log(strArr);
console.log(objArr);
console.log(funArr);
console.log("------------xxxxxxxxxxxxxx----------------");




//print distinct
const arr=["book","took","look","took","book","book","crook"]

function distinctval(arr){
const distinct=[]
for(let i=0;i<arr.length;i++)
{
    if(distinct.indexOf(arr[i])==-1)
    {
        distinct.push(arr[i])
    }
    
}
return distinct
}
console.log(distinctval(arr));