// MAP

// Write a function capitalize that takes a string and uses .map to return the same string in all caps. 
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"
var capitalize = function(string){
    let upper = [...string].map((val) => (val).toUpperCase())
    return upper.join("")
  }

 console.log(capitalize("oh hey gurl")); 

 
// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() 
// function to return a string where every other word is in all caps. 
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take. 
// ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"
var swapCase = function(string){
    let newStr = string.split(" ").map((val,self) => {
        if (self.indexOf(val) % 2 === 0)
        {
          return capitalize(val);
        }
        else
            return val
       
    })
    return newStr.join(" ")
    
  }

  console.log(swapCase("hey gurl, lets javascript together sometime"));