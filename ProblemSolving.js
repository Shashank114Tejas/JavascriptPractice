//Write a program to find the largest number in an array. done 

const arr=[1,2,3,4,5,6,7,8,9,10]

function largestOfAll(arr)
{
    let largest=0;
    for(let i=0;i<arr.length;i++){
    arr[i]>largest?largest=arr[i]:largest=largest
    }
    return largest
}
console.log(largestOfAll(arr));
console.log(largestOfAll([11,22,33,44,55,66,77]));




const arra=[5,5,5,2,2,2,2,2,9,4]

    //number of occurences in an array
    const occu = arra.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] = ++acc[curr]
        }
        else {
            acc[curr] = 1
        }
        return acc;
    }, {})
    console.log(occu);
    let valuess = Object.values(occu)
    console.log(valuess);
    let max = Math.max(...valuess)
    console.log(max);

    for (let  key in occu) {
        if (occu[key] === max) {
            console.log(key);
        }
    }

