let arr =[1,243,43,23,45,562,1];
let arr2 =[2,3,4,5,6,78,8,9];
let newArr = arr.concat(arr2);
//console.log(newArr);

let getarr =[...newArr,...arr2]; // we can cancat many array by using ...varname
//console.log(getarr);

let stringArray = Array.isArray("ANSHYADAV");
let strArray = Array.from("ANSHYADAV");

console.log(stringArray);
console.log(strArray); 


let a=100;
let b=200;
let c=300;

console.log(Array.of(a,b,c));