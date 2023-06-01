
//Write a JavaScript program to list the properties of a JavaScript object
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

for (let key in student) console.log(key);

console.log(
  "--------------------xxxxxxxxxxxxxxxxxxxxxxxxx---------------------------"
);
//Write a JavaScript program to delete the rollno property from the following object
console.log(student.rollno);
delete student.rollno;
console.log(student.rollno);

student.age=30
student.gender="male"
console.log(
  "--------------------xxxxxxxxxxxxxxxxxxxxxxxxx---------------------------"
);
//Write a JavaScript program to get the length of a JavaScript object

function totalSize(obj) {
  let size = 0;
  this.obj=obj;
  function count() {
    for (let key in this.obj) {
      if (key !== undefined)
      {
        size++;
      } 
    }
    return size;
  }
 return size=count();
}
let len = totalSize(student);
console.log(len);
console.log( "--------------------xxxxxxxxxxxxxxxxxxxxxxxxx-------------------------");
//Write a JavaScript program to display the reading status 
//(i.e. display book name, author name and reading status) of the following books
/**
 * Already read "The Road Ahead" by "Bill Gates".
Already read "Walter Isaacson" by "Steve Jobs".
You still need to read "Mockingjay: The Final Book of The Hunger Games" by "Suzanne Collins"
 */
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    let getStatus=((obj)=>{  for(let i=0;i<obj.length;i++)
        {
            obj[i].readingStatus==true?console.log(`Already read "${obj[i].title}" by "${obj[i].author}".`):console.log(`You still need to read "${obj[i].title}" by "${obj[i].author}"`);
        }})

        getStatus(library)


        console.log("-----------------------------xxxxxxxxxxxxxxxxxxxxxx----------------------");

        // Write a JavaScript program to get the volume of a cylindrical
        // with four decimal places using object classes

        /**
         * Volume of a cylinder : V = πr2h
           where r is the radius and h is the height of the cylinder.
         */
  
           let vol=((radius,height)=>{
             return (Math.PI*radius*2*height).toFixed(4)
           })

           console.log(vol(2,15))

           console.log("-----------------------------xxxxxxxxxxxxxxxxxxxxxx----------------------");
/**
 * Write a bubble sort algorithm in JavaScript. Go to the editor
Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]
 */

let arr=[6,4,0, 3,-2,1]
//=>
function compare(a,b){
    return a-b;
}
console.log(arr.sort(compare)); 
console.log("-----------------------------xxxxxxxxxxxxxxxxxxxxxx----------------------");
/**
 * Write a JavaScript program that returns a subset of a string. Go to the editor
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]
 */
//------------------------------------------------------------------
/**Write a JavaScript program to create a clock. Go to the editor
Note: The output will come every second.
Expected Console Output :
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47" */

function showtime()
{
    let date= new Date();
    let h= date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    let sesson="AM";
   
    if(h==0)
    h=12;
    if(h>12)
    h=h-12;
    sesson="PM"
    
    h=(h<10) ? "0"+h :h;
    m=(m<10) ? "0"+m :m;
    s=(s<10) ? "0"+s :s;


    let time= h+":"+m+":"+s+" "+sesson;


    console.log(time)
    setTimeout(showtime,1000);
}

//showtime();=====>>>call