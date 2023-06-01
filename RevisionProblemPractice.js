//find the length of an array without using length method.

const numsss=[2,2,2,5,5,5,5,5,9,9,4]


let duplicateCount=0
for(let i=0;i<numsss.length;i++)
{
    for(let j=i+1;j<numsss.length;j++)
    {
        if(numsss[i]===numsss[j])
        {
            duplicateCount++
            break;
        }

    }
}
console.log(duplicateCount);

const numssss=[2,2,2,5,5,5,5,5,9,9,4]


const occu=numssss.reduce((acc,curr)=>{

    if(acc[curr])
    {
        acc[curr]=acc[curr]+1
    }
    else{
        acc[curr]=1
    }
    return acc
},{})
console.log(occu);



const numsval=[1,2,3,4,5,6,7,8,9,]
const str="bookeeper"

const obj={name:'shashank',lastname:'kumar'}

let iterable=[...str]

console.log(...numsval);
console.log(...str);
console.log(iterable);
