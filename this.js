/**
 * this always refers to the window object
 * this===window gives true in console
 * 
 * inside or outside a function "this" always points to the global object that is window
 */

// console.log(this);
// this.name = "shashank"
// console.log(window.name);//shashank
// console.log(this.name);//shashank
// console.log(name);//shashank



// function checkThis() {
//     console.log(this);
// }

// checkThis() //Window {0: global, window: Window, self: Window, document: document, name: 'shashank', location: Location, …}


// function checkThis() {
//     console.log(this.name);//shashank
// }
// checkThis()


let person = {
    checkThis:function () {
       console.log(this);
    }
}

person.checkThis();//{checkThis: ƒ}
console.log(person);//{checkThis: ƒ}

const fun=person.checkThis;
fun();// Window {0: global, window: Window, self: Window, document: document, name: 'shashank', location: Location, …};

//the value of the this keyword determined by the calling context
//person.checkThis();//{checkThis: ƒ}- callie of the method is the object person
//const fun=person.checkThis;
//but in case of fun()- there is no calling context

//if a object is calling this keyword it will refer to the object else the default windown object