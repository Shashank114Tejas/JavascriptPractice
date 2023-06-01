
console.log(Math.abs(Math.floor(-43.4) + Math.trunc(-1.1) + Math.round(20.67)));
console.log(Math.floor(-43.4));//-44
console.log(Math.trunc(-1.1));//-1
console.log( Math.round(20.67));//21

let num = [54, 1, { first: 'amit', array: [2, 5, 'hi'] }];
console.log(num[2].array[2]);

num.fill(-0, 0, 1)
console.log(num);