// let person1 = {
//     firstname: "shashank",
//     lastname: "kumar",
//     print: function printfullname() {
//         console.log(this.firstname+" "+this.lastname);
//     }
// }

// person1.print()


// let person2 = {
//     firstname: "tejas",
//     lastname: "singh",
    
// }

// //Method borowwing from another object
// person1.print.call(person2)

//------------------------------------------------------------------------------------------------------------
//but istead of putting a method inside an obj we keep it outside

let print= function printfullname(age,hometown) {
    console.log(this.firstname+" "+this.lastname+ " is "+ age +" years old and lives in "+hometown);
}

let person1 = {
    firstname: "shashank",
    lastname: "kumar",
   
}

let person2 = {
    firstname: "tejas",
    lastname: "singh",
    
}

// print.call(person1,30,"dhanbad")//1st parameter obj and second is rest parameters
// print.call(person2,28,"mumbai")
// //------------------------------------------------------------------------------------------------------------
// // the only difference between the call and apply method is how we pass the arguments

// print.apply(person1,[30,"dhanbad"])//1st parameter obj and second is rest parameters in an array when we use apply method
// print.call(person2, 28, "mumbai")

//----------------------------------------------------------------------------------------------------------

//the difference between call and bind is that it binds a method to a variable which can be called later in the code

let bio = print.bind(person1, 30, "Dhanbad");
console.log(bio);
bio()