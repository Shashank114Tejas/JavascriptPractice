
let message = "hello";
let mail = message;

console.log(message==mail);
console.log(message === mail);

// they share the same reference the same memory address
let user = {
    name:'teju'
}

let loser = user;  // copy the reference
loser.name = 'tejas'
console.log(user.name);//tejas
//It’s as if we had a cabinet with two keys and used one of them (admin) to get into it and make changes.
//Then, if we later use another key(user),we are still opening the same cabinet and can access the changed contents.


console.log("-------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------------");
let a = {};
let b = a; // copy the reference

console.log( a == b ); // true, both variables reference the same object
console.log( a === b ); // true
//And here two independent objects are not equal, even though they look alike (both are empty):

let a1 = {};
let b1 = {}; // two independent objects

console.log(a1 == b1); // false


//Object structure cloning

let user2 = {
    name:'akash'
}

let clone = {};

for (let key in user2) {
    clone[key]= user2[key]
}
//// now clone is a fully independent object with the same content
clone.name = 'peter' // changed the data in it

console.log(clone.name);
console.log(user2.name);// still John in the original object

//another way
//Object.assign(dest, ...sources)
//it copies the properties from sources objects to target object.
//If the copied property name already exists, it gets overwritten:

let person1 = {
    name:'teju'
}
let permission1={canSee:true}
let permission2 = { canEdit: true }

Object.assign(person1, permission1, permission2)

console.log(person1);//{ name: 'teju', canSee: true, canEdit: true }
let cloned= Object.assign({},person1)
console.log(cloned);

//nested cloning
let user3 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    },
    sayHi: function () { console.log(this.name) }
};

let nestedcloning = Object.assign({}, user3)
console.log(nestedcloning);
  console.log(user3.sizes.height);//182
console.log(nestedcloning.sizes.height);//182


user3.sayHi()


console.log("---------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx-----------------------------------");
/**
 * Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
 */

let calculator = {
    read(a,b) {
        a,
        b
        return (a,b)
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
    
}

console.log(calculator.read(5,6));
console.log(calculator.sum(5,6));
console.log(calculator.read(5,6));

//-----------------------------------------------------------------------------
// Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

// But if there is a return statement, then the rule is simple:

// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.
// In other words, return with an object returns that object, in all other cases this is returned.

// For instance, here return overrides this by returning an object:


function BigUser() {

      this.name = "John";
    
      return { name: "Godzilla" };  // <-- returns this object
}
    
    console.log(new BigUser().name);
    
    function SmallUser() {

        this.name = "John";
      
        return;  // return this. in case of any primitive value
  }
  console.log(new SmallUser().name);


  //note we can omit the brackets after new but it is not suggestable.
let userr = new SmallUser
console.log(userr.name);

function Animal() {
    this.name = "liger"
    return;
}

let dog = new Animal;
console.log(dog.name);