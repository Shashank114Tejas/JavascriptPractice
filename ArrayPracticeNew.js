const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
//The forEach() method doesn't return anything,
// it just iterates over the array and performs the provided function on each element.
function getUserNames(arr){
 console.log(`${arr.username}!`); 
} 

const usernames=array.forEach(getUserNames)
  console.log(usernames);

  const newArrayForEach = []
array.forEach(user => {
  newArrayForEach.push({ ...user, username: `${user.username}!` })
})
console.log(newArrayForEach);

console.log("-----------------xxxxxxxxxxxxxxxxxxxxx----------------");
//Create an array using map that has all the usernames with a "?" to each of the usernames
 const userNames=array.map((val)=>{
    val.username=val.username+"?"
    return val;
 })
 console.log(userNames);
 
 /// when you return an array of objects,
 // then you should put ({ }) for return the object to array.
 console.log("-----------------xxxxxxxxxxxxxxxxxxxxx----------------");

 //Filter the array to only include users who are on team: red
const redTeam=array.filter((val)=>val.team==='red')
console.log(redTeam);
console.log("-----------------xxxxxxxxxxxxxxxxxxxxx----------------");

////Find out the total score of all users using reduce

const totalScore=array.reduce((acc,current)=>acc+current.score,0)
console.log(totalScore);
console.log("-----------------xxxxxxxxxxxxxxxxxxxxx----------------");


const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i,arr) => {
  console.log(num, i, arr);
    return num * 2;
})
console.log(newArray);
console.log("-----------------xxxxxxxxxxxxxxxxxxxxx----------------");

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newList=array.map((val)=>val.items.map((val)=>val+"!"))
//const anwser = array.map(user => ({...user, items: user.items.map(item => `${item}!`)}))

console.log(newList);