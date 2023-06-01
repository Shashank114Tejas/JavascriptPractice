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



function maxOccurence(str){
    const wordsArr=str.replaceAll(" ","").split("")
 
    let count={}

    for(let i=0;i<wordsArr.length;i++){
    let ch=wordsArr[i]
    
    count[ch]=count[ch]?count[ch]+=1:1
    }

    let values=Object.values(count)
    let maxVal= Math.max(...values)

    for(let key in count)
    {
        if(count[key]===maxVal)
        console.log(key);
    }
    console.log(count);

}

maxOccurence("the quick brown fox")
maxOccurence("bookkeeper")
maxOccurence("The cleaver fox jumps over the lazy dog")