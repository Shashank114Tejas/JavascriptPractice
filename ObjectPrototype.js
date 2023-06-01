let animal = {
    eat: true,
    run(){console.log("runs faster");}
};

let mouse = {
    walk: "jump",
    run(){console.log("runs slower")},
    __proto__: animal
};

console.log(mouse.walk);//jump
console.log(mouse.eat);//true
console.log(animal.eat);//true
animal.run()//runs faster
mouse.run();//runs slower


console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------");

function Employee() {
    this.name = "";
    this.dowork = function () { console.log("basic work"); }
    this.attendence=function(){console.log("attendence needed");}

}
function Manager() {
    this.cabin = "";
    this.dowork=function(){console.log("manages team");}
}

let emp= new Employee()
Manager.prototype = emp

let man = new Manager();
console.log(man.cabin);
man.dowork()
man.attendence()
console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------");
let obj = {
    name: "",
    fame: "",
    game:""
}

let obj2 = {
    tame: "",
    shame: "",
    lame: "",
    __proto__:obj
}
console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------");

for (let key in obj2) {
    console.log(key);
}
console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------");
let keys = Object.keys(obj2)
console.log(keys);

console.log("--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------");

let hamster = {
    stomach: [],
  
    eat(food) {
        //this.stomach.push(food)
      this.stomach=[food]
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple