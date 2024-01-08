let ans =  "Ansh";
console.log(ans.length);
console.log(ans.charAt(2));
console.log(ans.indexOf('s'));

// we can define the string as
let str = new String("hitesh");
console.log(str.length);
console.log(str.charAt(3));
console.log(str.indexOf('e'));
/*
we can perform many action on the string just like , in uppercase,lowercase 

*/
console.log(str.toUpperCase());
console.log(str.toLowerCase());
let name = "Ansh Yadav";
const age = 22;
let infor = `hey guys! this is ${name} this side , and my age is ${age}`; //this is backtics method ,and variable holder is called place holder in it
console.log(infor);

console.log(name.substring(3,4)); //this has starting and ending index in the substring
console.log(name.slice(0,3)); //start w
// trim, replace ,includes etc