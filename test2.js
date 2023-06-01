const employees = [
    {
      id: 76993,
      name: "Abhijit Mane",
      managerId: 20209,
      department: "7001-Admin",
    },
    {
      id: 76585,
      name: "Sumit Mate",
      managerId: 20205,
      department: "7002-Finance",
    },
    {
      id: 75599,
      name: "Sumit Kulkarni",
      managerId: 20209,
      department: "7003-HR",
    },
    {
      id: 76113,
      name: "Prayag Mokate",
      managerId: 20205,
      department: "7001-Admin",
    },
    {
      id: 76585,
      name: "Sumit Mate",
      managerId: 20205,
      department: "7002-Finance",
    },
    {
      id: 72299,
      name: "Pawan Belamkar",
      managerId: 20209,
      department: "7003-HR",
    },
    {
      id: 75589,
      name: "Nikhil Patne",
      managerId: 20205,
      department: "7013-IT",
    },
    {
      id: 20205,
      name: "Chetan Shewale",
      managerId: 10101,
      department: "7013-IT",
    },
    {
      id: 20209,
      name: "Priyanka Bhale",
      managerId: 10101,
      department: "7013-IT",
    },
  ];
  
const names = []
const names2 = new Array();
const reports20209 = employees.filter((val) => {
    if (val.managerId == 20209) {
       names.push(val.name)
    }
})


console.log(names);


const objects = [{
    id: 1,
    name: "Abhijit Mane",
    age: 30,
    gender: "male",
  }, {
    id: 2,
    name: "Sumit Mate",
    age: 25,
    gender: "male",
  }, {
    id: 3,
    age: 20,
    gender: "female",
  }];
  
  
  

