//Write a program to find the sum of all even numbers between 1 and 100. done
let sum=0
for(let i=1;i<101;i++)
{
    if(i%2==0)
    {
       sum+=i
    }
}

console.log(sum);
console.log("-----------------xxxxxxxxxxxxxxxx---------------------");
//Write a program to reverse a given string.

function rev(str){ 
    let reve=""
 for(let i=str.length-1;i>=0;i--)
 {
    reve+=str[i]
 }
 return reve;
}

console.log(rev("The undertaker")); 
console.log(rev("Bookkeeper"));

let sentence="The quick brown fox";
      let senArr= sentence.split(" ");
       let reverse = "";
       for(let key of senArr)
       {
           reverse = key + " "+ reverse;
       }
      console.log(reverse);
    