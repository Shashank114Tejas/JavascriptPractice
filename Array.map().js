//map()creates a new array by performing a function on each array elements

var council = [

    { id: 2100, name: 'President Jacqueline' },
  
    { id: 2114, name: 'Vice-president James' },
  
    { id: 3016, name: 'House-captain Otis' },
  
    { id: 4818, name: 'Prefect Finneas' }
  
  ];

  //we need a final array containing just the id of every individual.

  const councilId=council.map((a)=>a.id)
  console.log(councilId);

  console.log("----------------------xxxxxxxxxxxxxxxxxxxxxxx--------------------");
  //Array squared-
  /**Array.prototype.map()
     Math.pow()
   * Square the value of every element in the array.
   *  Presume that you will only get numbers in the input array.*/

  const input = [1, 2, 3, 4, 5]

  const double=input.map((val)=>Math.pow(val,2))
  console.log(double
    
    );
    console.log("----------------------xxxxxxxxxxxxxxxxxxxxxxx--------------------");
    const characters = [
      {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          eye_color: 'blue',
          gender: 'male',
      },
      {
          name: 'Darth Vader',
          height: '202',
          mass: '136',
          eye_color: 'yellow',
          gender: 'male',
      },
      {
          name: 'Leia Organa',
          height: '150',
          mass: '49',
          eye_color: 'brown',
          gender: 'female',
      },
      {
          name: 'Anakin Skywalker',
          height: '188',
          mass: '84',
          eye_color: 'blue',
          gender: 'male',
      },
  ];
  /**
   * MAP
Get an array of all names
Get an array of all heights
Get an array of objects with just name and height properties
Get an array of all first names
   */

const chNames=characters.map((character)=>character.name)
console.log(chNames);
const chHeights=characters.map((character)=>character.height)
console.log(chHeights);
const chNameAndHeights=characters.map((character)=>{
 return {name:character.name, height:character.height}
});
console.log(chNameAndHeights);
const chFirstNames=characters.map((character)=>character.name.split(" ")[0])
console.log(chFirstNames);

    



