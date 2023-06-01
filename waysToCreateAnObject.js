//1. Object literal\

let person = {
    age: 20
}


//2. Object.create

let person2 = Object.create(person)

console.log(person);//{ age: 20 }
console.log(person2);//{}
person2.age=50
console.log(person2);//{}

//3. constructor

let person3 = new Object();
person3.name = 'shashank'

console.log(person3);

//Object constructor

function Patient(name,age) {
    this.name = name;
    this.age=age
}
 
let person4 = new Patient('tejas', 28)
console.log(person4);
