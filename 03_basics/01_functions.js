function getname(Number1, Number2){
    console.log(Number1+Number2);
}
//getname(3,4);

function  getresult(a,b){
    return a*b;
}

//console.log(getresult(3,4));

//we can define the function that have a fixed parameter until we pass anything in it

function check(user="Computer"){
    if(!user){
        console.log("please enter the username");
        return;
    }
    console.log(`${user} has been logged in`);
}
// check();
// check("ANsh");



//if we have to enter severals values , that we dont know , as the number of items that could be added into the cart

function items(item1,items2,...num1){
    return num1;
}
//if we pass more than 2 values in the parameter they all will go into the nums 

console.log(items(1,2,4,4,5,4,3,3,));
