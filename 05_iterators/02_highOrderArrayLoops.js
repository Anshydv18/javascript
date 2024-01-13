//if we have to run for reach loops , then we have some options , as the 
//1. for of loops
let arr = [1,2,3,4,2,4,6]
for (const nums of arr) {
    console.log(nums);
}


let maps = new Map();
maps.set('ansh','RamJanamYadav');
maps.set('RamJanamYadav','RamNareshYadav');

console.log(maps);

// maps['RajitRam']='RamNareshYadav';
// maps['Arpit']='RajitRamYadav';
//defining in this ways is like a object

console.log(maps);
console.log(maps.get('ansh'));
console.log(maps.size);

for(let [key,value] of maps){
    console.log(key ,' :- ', value);
}


let obj ={
    firstname:"Ansh",
    secondName:"Yadav",
    email:"anshyadav21002@gmail.com",
    phno:9569816212
};

console.log(obj);
for (const key in obj) {
    console.log(`${key} value is ${obj[key]}`);
}