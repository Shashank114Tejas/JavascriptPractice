function foo() {
    let a = b = 0;
    a++;
    return a;
  }
  
  foo();
console.log(typeof a);  
console.log(typeof b);  


console.log(Number("123"));
console.log(parseInt("123"));
console.log("---------------------");
console.log(Number("123.23"));
console.log(parseInt("123.23"));
console.log("---------------------");
console.log(Number("123$23"));
console.log(parseInt("123$23"));
console.log("---------------------");
console.log(Number(true));
console.log(parseInt(false));

//SYMBOLS


let obj = {}

obj["cost"] = 100;
obj.value = 200;


let sym = Symbol("sym");
obj[sym]="spidermonkey"

var sym2 = Symbol("sym2")
obj[sym2] = "V8"
obj.sym2='nitro'
obj[sym2]="o la la la le oo"

obj.value = 300

console.log(obj);

for (let key in obj)
{
    console.log(obj[key]);

}

console.log("------------------------xxxxxxxxxxxxxxxxxxxxxxx---------------------------------");

const array = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4]

let count = 0;
for (let i = 0; i < array.length; i++){
  for (let j = i + 1; j < array.length; j++){
    if(array[i]==array[j])
      count++
    break;
  }
}
console.log(count);

const array2 = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];

const fil= array2.filter((val,i,self)=>self.indexOf(val)==i)
console.log(fil);


function insertunique(arr, ...items) {
  items.forEach((ele)=>{
    if (arr.indexOf(ele) == -1)
      arr.unshift(ele);
  })
}
      

insertunique(array2, 2, 3, 4, 5, 6, 7, 9)
console.log(array2);


