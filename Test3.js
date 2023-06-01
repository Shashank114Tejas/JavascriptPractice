let duplicate=[2,2,2,2,2,2,5,5,5,5,5,6,6,9,0]


const occu=duplicate.reduce((acc,curr)=>{
    if (acc[curr]) {
        acc[curr] = acc[curr] + 1
    }
    else {
        acc[curr] = 1
    }
    return acc;
},{})

console.log(occu);
