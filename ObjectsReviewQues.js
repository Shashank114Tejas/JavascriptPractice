function createPerson() {
    let name = "John"; // private property
  
    return {
      getName: function() {
        return name; // public method accessing private property
      },
      setName: function(newName) {
        name = newName; // public method modifying private property
      }
    };
  }
  
  const person = createPerson();
  console.log(person.getName()); // Output: John
  person.setName("Alice");
  console.log(person.getName()); // Output: Alice
  console.log(person.name); // Output: undefined (private property not accessible)
  


  let namee= Symbol("name")
let person1 = {
    [namee]: 'shashank',
    age:30
}
console.log(Object.getOwnPropertyNames(person1));
console.log(Object.getOwnPropertySymbols(person1));
console.log(Object.getOwnPropertyDescriptors(person1));
console.log(Object.getPrototypeOf(person1));