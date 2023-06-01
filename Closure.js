// function a(){
//     var x=10;
//     function b(){
//         console.log(x);
//     }
//     b()
// }
// a();

//---------------------------------------------------------------

// function a(){
//     var x=10;
//     function b(){
//         console.log(x);
//     }
//      return b;
// }
// let z=a();
// console.log(z);
// //.......
// z()

//---------------------------------------------------------------

// function a(){
//     var x=10;
//     return function b(){
//         console.log(x);
//     }
      
// }
// let z=a();
// console.log(z);
// //.......
// z()

//---------------------------------------------------------------


function k(){
    var y=900
    function a(){
        var x=10;
        function b(){
            console.log(x,y);
        }
         return b;
    }
    return a
}

    
let res=k();
console.log(res);
//res()
res()()

