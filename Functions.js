// Write a JavaScript function that reverses a number

function reverse(num){
    const a=[...String(num)]
    const rev=a.reverse();
    const final=Number(rev.join(""))
    console.log(final);
}
reverse(32243)
//function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(32243)));

console.log("------------------xxxxxxxxxxxxxxxxxxxx-----------------------------");
//Write a JavaScript function that checks whether a passed string is a palindrome or not?

function isPalindromeOrNot(str){
   const strArr= str.split("").reverse().join("")
   str===strArr? console.log(`${str} is Palindrome`):console.log(str+" is Not Palindrome");
}
isPalindromeOrNot("MADAM")
isPalindromeOrNot("Sir")
console.log("------------------xxxxxxxxxxxxxxxxxxxx-----------------------------");
// Write a JavaScript function that generates all combinations of a string
//Example string : 'dog'
//Expected Output : d,do,dog,o,og,g
//-------------------------------------------------------------------------------
// Write a JavaScript function that returns a string that has letters in alphabetical order.

function returnAlphabetical(str)
{
    const newStr=str.split("").sort().join("")
    console.log(newStr);
}
returnAlphabetical("palash")
console.log("------------------xxxxxxxxxxxxxxxxxxxx-----------------------------");
/** Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case. Go to the editor
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' */

function capitalization(str){
    let cap=str.split(" ");
    for(let i=0;i<cap.length;i++)
    {
        let Cap=cap[i].substring(0)[0].toUpperCase().concat(cap[i].substring(1))
         cap[i]=Cap;
    }
    cap=cap.join(" ")
console.log(cap);
}

capitalization("the quick brown fox")
console.log("------------------xxxxxxxxxxxxxxxxxxxx-----------------------------");
//Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

function longestStr(str)
{
    let longest=str.split(" ")
    let longestWord="";
    for(let i=0;i<longest.length;i++)
    {
      longest[i].length>longestWord.length?longestWord=longest[i]:longestWord=longestWord;
    }
    return longestWord
}

console.log(longestStr("Web Development Tutorial"))
console.log("------------------xxxxxxxxxxxxxxxxxxxx-----------------------------");

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function vowelCount(str){
    let vowel=0;
    for(let i=0;i<str.length;i++)
    {
       if (str.charAt(i)==='a' || str.charAt(i)==='e' || str.charAt(i)==='i' || str.charAt(i)==='o' || str.charAt(i)==='u')
        {
            vowel++;
        }
    }
    console.log("vowels count :" + vowel);
}

vowelCount('The quick brown fox')

console.log("------------------xxxxxxxxxxxxxxxxxxxx-----------------------------");
//Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not
//A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num)
{

    if(num===1)
    {
    return false;
    }
    else if(num===2) 
    {
    return true;
    }
    else{
    for(let i=2;i<num;i++)
    {
      if(num%[i]===0)
      {
        return false;
      }
      else return true;
    }
}
}

console.log( isPrime(37));
console.log( isPrime(14));
console.log("------------------xxxxxxxxxxxxxxxxxxxx-----------------------------");


/**Write a JavaScript function that accepts an argument and returns the type. Go to the editor
Note : There are six possible values that typeof returns: 
object, boolean, function, number, string, and undefined. */

function type(anything)
{
    return typeof(anything)
}

console.log(type(8));
console.log(type("3"));
console.log(type(undefined));
console.log(type(true));
console.log(type(()=>{}));
console.log(type({name:'tejas'}));
console.log("------------------xxxxxxxxxxxxxxxxxxxx-----------------------------");
/**. Write a JavaScript function that takes an array of numbers and 
 * finds the second lowest and second greatest numbers, respectively. */


// function secondLargest(nums){
// let greatest=0;
// let secondgreatest=0;

// for(let num of nums)
// {
//  if(num>greatest)
//  {
//     secondgreatest=greatest;
//     greatest=num;
//  }
//  else if (num > secondgreatest) {
//     secondgreatest = num;
//  }
// }
// console.log(`largest num is: ${greatest} and second largest is: ${secondgreatest}`);
// }

// secondLargest(nums);

function compare(a,b){
    return a-b
}

let com=(a,b)=>a-b

const nums=[1,11,66,23,43,33,45,3,-1,-4,67,65]

let newnums=nums.sort(com)
console.log(newnums);
console.log(newnums[1]+": second smallest");
console.log(newnums.at(-2)+": second largest");
console.log(newnums.at(-1)+":  largest");
