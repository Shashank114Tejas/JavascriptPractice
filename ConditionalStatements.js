//Write a JavaScript program that displays the largest integer among two integers. 

// function largest(a,b)
// {
//     return Math.max(a,b)
// }
// console.log(largest(11,21));
// console.log(largest(11,-21));

function greater(a,b){
 const greater=(a>b?a:b)
 console.log(greater);
}
greater(22,33)
console.log("----------------xxxxxxxxxxxxxxxxxxxxxxxxx------------------------");
/**
 *  Write a JavaScript for loop that iterates from 0 to 15. For each iteration, 
 * it checks if the current number is odd or even, and displays a message on the screen.
 *  Go to the editor
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
----------
 */

const nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function evenOrOdd(num)
{
    for(let num of nums)
    {
        if(num%2===0)
        console.log(`${num} is even`);
        else
        console.log(`${num} is odd`);
    }
    
}
evenOrOdd(nums) 