const user ={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
    }
}
//console.log(user.welcomeMessage());
//we get this , in the node function as the, empty object
const chai=function(){
    let username="hitesh";
   //console.log(this); //this.username can be accesed in only objects , but 'this' can be used
}
chai();

//arrow function is as below

const getting =(a,b)=>{
    return a+b;
}
console.log(getting(1,4));

//we can use arrow function as implicit function

const addtwo =(a,b)=> a+b;
const addt = (a,b)=>(a+b);
//if we will use paranthesis than we have to return the value otherwise as above

console.log(addtwo(3,5));
console.log(addt(5,7));