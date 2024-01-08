/*
mainly the datatypes are of two types 
1.primitive dataypes
2.reference(non-primitive)

=>primitive 7 types : string,boolean,numbers,bigInt ,null,undefined,symbols

=>refernces Arrays,objects,functions

*/

const accoundId = Symbol('123');
const reaccound = Symbol('123');
console.log(accoundId===reaccound);

let arr =["ansh","RamJanamYadav","MaltiDevi"];
console.log(arr);

//the typeof null is object and all the other dataypes of every datatype are same
// the typeof references are the object functions of all 


// primitive values (stack) and non-primitive(heap);
/*
stack always makes a copy and heap makes a refrence of the main value 
*/