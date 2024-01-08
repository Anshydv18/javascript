const score = 100;
//console.log(typeof score);
//console.log(score);


const sc = new Number(123);
//console.log(typeof sc);
//console.log(sc);
//we can change number to the string

//console.log(sc.toString().length);

//we can use precision to fix 

//console.log(sc.toFixed(3));

const numbers = 123.567

//console.log(numbers.toPrecision(3));


/*
now we can change our numbers as our indian , comma scheme
*/

const mynumber = 9569816212
//console.log(mynumber.toLocaleString());
//console.log(mynumber.toLocaleString('en-IN'));

//---------Maths----------------------------

// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));

console.log(Math.random());
//we can keep every number between  1 to 10
console.log(Math.floor(Math.random()*10)+1);

//if we want to generate randoms number between a interval
const a = 10;
const b = 20;
console.log(Math.floor(Math.random()*(b-a+1))+a);