/**10. Write a JavaScript program to sort an array of JavaScript objects. Go to the editor
Sample Object :


Expected Output:

[[object Object] {
  author: "Walter Isaacson",
  libraryID: 4264,
  title: "Steve Jobs"
}, [object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "The Road Ahead",
  libraryID: 1254,
  title: "Bill Gates"
}] */

var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];


    library.sort((a, b) => b.libraryID - a.libraryID);

    console.log(library);

    console.log("-------------------------xxxxxxxxxxxxxxxxxxxxxxxxxx----------------------")

  //  Write a JavaScript function to retrieve all the values of an object's properties.
for(let i=0;i<library.length;i++){
  for(let key in library[i]){
    console.log(library[i][key])
  }
}
console.log("-------------------------xxxxxxxxxxxxxxxxxxxxxxxxxx----------------------")
//Write a JavaScript function to get a copy of the object 
//where the keys become the values and the values are the keys.
//library.forEach((k,v)=>{console.log(k+":"+v);})

for(let i=0;i<library.length;i++)
{
   for(let key in library[i])
   {
    console.log(`${library[i][key]}:${key}`);
   }
}

console.log("---------------------------xxxxxxxxxxxxxxxxxxxxxxx------------------");
//Write a JavaScript function to check whether an object contains a given property

function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
  }

  // Check if the first book in the library has a 'title' property
console.log(hasProperty(library[0], 'title')); // Output: true

// Check if the second book in the library has an 'isbn' property
console.log(hasProperty(library[1], 'isbn')); // Output: false