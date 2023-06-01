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
const newArr=[]
const exclamationNames = array.forEach((val) => newArr.push({ ...val, username: `${val.username}!` }))

console.log(newArr);
// console.log("-----------------xxxxxxxxxxxxxxxxxxx---------------------");
// console.log("-----------------xxxxxxxxxxxxxxxxxxx---------------------");

array.forEach((val) => console.log(val.username + "!"))
//Create an array using map that has all the usernames with a ? to each of the usernames
const newArrayMap = array.map(user => ({ ...user, username: `${user.username}?` }))
console.log(newArrayMap);
 

//Filter the array to only include users who are on team: red
const teamRed = array.filter((val) => val.team === 'red')
console.log(teamRed);



//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, curr) => acc + curr.score, 0)
console.log(totalScore);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newListOfUsers = array.map((user) => ({ ...user, items: user.items.map(item => `${item}!`) }))

console.log(newListOfUsers);