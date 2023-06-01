function outer(){
    var x=20;
    return function inner(){
        console.log(x);
    }     
}
let r=outer()
console.log(r);
r()

console.log("-----------------xxxxxxxxxxxxxxxxxxxxx----------------");

function a(){
    let j=10;
    function b(){
        let k=20
        function c(){
         console.log(j,k);
        }
         return c
    }return b
}
let outest=a()

outest()()
console.log("-----------------xxxxxxxxxxxxxxxxxxxxx----------------");

function out(){
    var x=20;
     function inn(){
        console.log(x);
    }  
    return inn;   
}

out()()

// var oouutt=out()
// oouutt();
