//calculate the length of an array without using length method.

const nums=[1,2,3,4,5,6,7,8,9,101]


 let len=0;
for(let i=0;i<nums.length;i++)
{
    if(nums[i]){
        len++;
    }

}
console.log(len)

console.log("-------------------xxxxxxxxxxxxxxxxxxx---------------");
//prints all the elements in an array

const arr=[1,22,33,'shubh','17',{nationality:'indian'},function(){console.log("hello world!");}]
console.log("-------------------FOR_OF_LOOP---------------");

for(let key of arr)
{
    console.log(key);
}
console.log("-------------------FOR_LOOP---------------");

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log("-------------------FOR_EACH_LOOP---------------");

arr.forEach((val)=>console.log(val))
console.log("-------------------FOR_IN_LOOP---------------");

for(let key in arr)
{
    console.log(arr[key]);
}
console.log("-----------------ToSTRING---------------");

console.log(arr.toString());
console.log("-----------------Join--------------");
console.log(arr.join());

console.log("-------------------xxxxxxxxxxxxxxxxxxx---------------");
//Average and sum of all array elements 

let array=[1,2,3,4,5,6]

let sum=0;
// for(let i=0;i<array.length;i++)
// {
//     sum+=array[i]
// }

// let average=sum/array.length

// for(let key of array)
// {
//     sum+=key
// }

// let average=sum/array.length

const total=array.reduce((acc,curr)=>acc+=curr,0)
let avg=total/array.length

console.log(`sum is: ${total} and average is: ${avg}`);
console.log("---------------------xxxxxxxxxxxxxxxxxxxxxx-------------------");
//even and odd position array elements in js

const arr2=[11,22,33,44,55,66,99,88,77,66]

const evenIndarr=[]
for(let i=0;i<arr2.length;i++)
{
    if(i%2===0)
    evenIndarr.push(arr2[i])
}
const oddIndarr=[]
for(let i=0;i<arr2.length;i++)
{
    if(i%2)
    oddIndarr.push(arr2[i])
}
console.log(evenIndarr);
console.log(oddIndarr);

console.log("---------------------xxxxxxxxxxxxxxxxxxxxxx-------------------");
//reverse array elements without using reverse

const arr3=['the','name','is','john','cena']
const rev=[]

console.log(arr3.reverse);
let reve=" "
for(let key of arr3)
{
   reve=(key+" "+reve)
}
console.log(reve);
console.log("---------------------xxxxxxxxxxxxxxxxxxxxxx-------------------");


//remove specific item from an array.
const items=['apple','orange','grapes','pear','banana']

function deleteItem(array,word){
if(array.includes(word)===true)
{
    let inde=array.indexOf(word)
    array.splice(inde,1)
    //delete array[inde]- hole in the array
}
return array;
}

console.log(deleteItem(items,'pear'));
console.log(deleteItem(items,'pear'));
console.log("---------------------USING FILTER-------------------");

//using filter
const fruits=['apple','orange','grapes','pear','banana']

const filteredItemArr=fruits.filter((val)=>val!='pear')
console.log(filteredItemArr);
console.log("---------------------xxxxxxxxxxxxxxxxxxxxxx-------------------");


//Count the number of duplicates elements in an array
const numbs=[1,2,3,4,5,1,4,2,4,7,9,5]
let count=0
for(let i=0;i<numbs.length;i++)
{
   for(let j=i+1;j<numbs.length;j++)
   {
    if(numbs[i]==numbs[j])
    count++
    
   }
}
console.log(count);
console.log("---------------------xxxxxxxxxxxxxxxxxxxxxx-------------------");

const arra=[5,5,5,2,2,2,2,2,9,4]

//number of occurences in an array
var counts={}
for(let i=0;i<arra.length;i++)
{
var num=arra[i]//num=1
counts[num]=counts[num]?counts[num]+1:1
}
/**
 * if(counts[num]){
 * counts[num]+=1;
 * }else{
 * counts[num]=1}
 * 
 */
console.log(counts);

console.log(Object.keys(counts)); 
console.log(Object.values(counts));

const values=Object.values(counts)
const maxVal=Math.max(...values)

for(let key in counts)
{
    if(counts[key]==maxVal)
    console.log(key);
}

console.log("---------------------xxxxxxxxxxxxxxxxxxxxxx-------------------");
//multiply each array element by its array length

const numArr=[1,2,3,4,5,6,7,8,9,10]
const result=numArr.map((val)=>val*numArr.length)
console.log(result);
console.log("---------------------xxxxxxxxxxxxxxxxxxxxxx-------------------");

//only return numbers
let arr5 = [1, 2, null, 3, undefined, 4, NaN, 5];
// let filteredArr = arr.filter((val) => {
//   return !(val=== null || val=== undefined || isNaN(val) );//val=== NaN
// });
let onlyNumbers=arr5.filter((val)=>typeof val=='number')
console.log(onlyNumbers);

const arr6=[0, 1, false, 2, undefined, '', 3, null,NaN]
let filtered=arr6.filter((n)=>(typeof(n)=='number'))
console.log(filtered);
console.log(arr3);
console.log("--------------------typeof------------------");

const heavyArray=[1,2,3,4,5,'a','b','c','d','e',{name:'sk'},{fame:'srk'},function(){},undefined,null,NaN]
const numfiltered=heavyArray.filter((val)=>typeof val==='number' )
const Stringfiltered=heavyArray.filter((val)=>typeof val==='string')
const objfiltered=heavyArray.filter((val)=>typeof val==='object')
const funcfiltered=heavyArray.filter((val)=>typeof val==='function')

console.log(numfiltered);
console.log(Stringfiltered);
console.log(objfiltered);
console.log(funcfiltered);
console.log("-------------------------xxxxxxxxxxxxx--------------------");

//unique values in an array

const mixedArr = ['dog', 'cat', 'mouse', 'jiraffe', 'mouse', 'cat', 'dog', 'lion']


function getUniqueItems(arr){
    const uniqueArr=[]

    for(let i=0;i<arr.length;i++)
    {
        if(uniqueArr.indexOf(arr[i])==-1)
        uniqueArr.push(arr[i])
    }
    return uniqueArr;
}

console.log(getUniqueItems(mixedArr));
const filt = mixedArr.filter((val, i, self) => (self.indexOf(val) == i))
console.log(filt);


