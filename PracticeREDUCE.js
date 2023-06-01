// REDUCE

// Write a function that takes a string and returns an object representing the character 
// count for each letter. Use .reduce to build this object. 
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
var countLetters = function (string) {
    const strArr = string.replaceAll(" ", "").split("").reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1
        }
        else{
            acc[curr]= 1
        }
        return acc;
           
    }, {})
    return strArr
}

console.log(countLetters("RELEVEL"));
console.log(countLetters('abbcccddddeeeee'));  // => {a:1, b:2, c:3, d:4, e:5}


// Write a function that takes a string and a target, and
// returns true or false if the target is present in the string.Use
// .reduce to acomplish this.
// ex. isPresent('abcd', 'b') // => true
// ex. isPresent('efghi', 'a') // => false
var isPresent = function(string, target) {

    //abcd
    const arr = string.split("").reduce((acc, curr, i, self) => {
        if (self.includes(target)){
            return true;
        }
        return acc
    }, false)
    return arr
  
}
console.log(isPresent('abcd', 'b'));
console.log(isPresent('efghi', 'a'));