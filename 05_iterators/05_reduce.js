let arr = [1,2,3,4,5,6,7,8,9];

const newArr = arr.map((num)=> num*10);
console.log(newArr);

//we can do chaining of multiple methods 

const Arr1 = arr.map((num)=> num*10)
                            .map((num)=>num+2)
                            .filter((num)=>num>=30);
console.log(Arr1);