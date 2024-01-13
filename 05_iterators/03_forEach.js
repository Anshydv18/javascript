/*let arr = [11,22,33,44,55,66,77];

arr.forEach((key)=>{
    console.log(key);
})

//we can create external function as per using in the same parameter

function printme(item){
    console.log(item);
}

arr.forEach(printme);

*/

let arr =['ramesh','naresh','hero','ram','shyam'];
arr.forEach((item,index,arr)=>{
   // console.log(item,index,arr);
})

const myact=[
    {
        username:"java",
        version:1.9
    },
    {
        username:"c++",
        version:2.00
    }
];

myact.forEach((item)=>{
    console.log(item.username);
});