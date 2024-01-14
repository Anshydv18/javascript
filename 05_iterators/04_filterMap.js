let arr  = [1,2,3,4,5,6,7,8,9,10];

let myArr = arr.filter((num)=> num>4);
console.log(myArr);

let myArr1 = arr.filter((num) => (num<6));
console.log(myArr1);

// if we will use {} curli brackets than we have to return the value not a simple line ##very very important

let myArr2 = arr.filter((num)=>{
    return num%2;
})
console.log(myArr2);

//we can filter some objects from their keys, if they are present in the array

