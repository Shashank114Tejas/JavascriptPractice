//eligible for vote or not

function eligibleOrNot(age) {
 let result= (age>17)?"pass":"fail"  
 console.log(result);  
}
eligibleOrNot(32);
eligibleOrNot(18);
eligibleOrNot(17);
console.log("--------------------xxxxxxxxxxxxxxxxxxxxx--------------------");
//greatest num
function greatestOfAll(num1,num2,num3) {

let greatestOfAll= (num1>num2)?num1:num2>num3?(num1>num2)?num1:num2:num3
console.log(`out of ${num1}, ${num2} and ${num3} --> ${greatestOfAll} is the greatest`)
}

greatestOfAll(1000,200,30);
console.log("--------------------xxxxxxxxxxxxxxxxxxxxx--------------------");
//weekday=false and vacation=true:sleep
//weekday=true and vacation= false:don't sleep
//weekday=false and vacation=false:sleep

function sleepOrNot(weekday,vacation){
let command= (!weekday && vacation) ? "Go To Sleep" : ((weekday && !vacation) ? "Don't Sleep!!!" : "Go To Sleep");
console.log(command);
}

sleepOrNot(false,true);
sleepOrNot(true,false);
sleepOrNot(false,false);
console.log("--------------------xxxxxxxxxxxxxxxxxxxxx--------------------");

//grade

function grade(marks){
    let report=(marks<40)?"not satisfactory":(marks>=40 && marks<=70)?"Average":(marks<90)?"good":"excellent"
    console.log(report);
}

grade(75);
grade(25);
grade(70);
grade(45);
grade(95);

console.log("----------------------xxxxxxxxxxxxxxxxxxxxxxxx--------------------");
//condition1 ? condition2 ? Expression1 : Expression2 : Expression3
//if- else if- else

function trip(budget){
    const score=budget>100000 ? budget>=500000 ?"SINGAPORE":"BALI":"MANALI"
    console.log(score);
}

trip(10000);
trip(600000);
trip(300000);
//num is =ve, -ve or zero

function positiveOrNegative(num){
    const result=num!=0? num>0?"num is positive":"num is negative":"you entered zero"
    console.log(result);
}

positiveOrNegative(32)
positiveOrNegative(-0)
positiveOrNegative(-12)
positiveOrNegative(0)

console.log("----------------------xxxxxxxxxxxxxxxxxxxxxxxx--------------------");
