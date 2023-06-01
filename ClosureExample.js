
function outer() {
    var counter = 7
    function inner() {
       console.log(counter);
    }
    return inner;
    
}
let ref = outer()

//.....................

ref()


console.log("---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxx---------------------------------");

//benefits of closure-
//1. you cannot mutate x from outside
//2. you can make methods private - here we are only allowing increment and getXvalue public

function closureFunc() {
    var x;
    function increment() {
        return x++
    }
    function getXValue() {
        return x;
    }

    function init() {
         x = 0;
    }
    init();
    return {
        increment,getXValue
    }
}
var reference = closureFunc()

reference.increment()
reference.increment()
reference.increment()

console.log(reference.getXValue());