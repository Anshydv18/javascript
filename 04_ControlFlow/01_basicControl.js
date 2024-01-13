const  a= 6;
//if(a<=5) console.log("it is greater than two"), console.log(a);
// we can use scope like this , it will run be , but not a readable code , It's just a fancy code

/*if(a<5){
    console.log("number is less than five");
}
else if(a==5){
    console.log("number is equal to 5");
}
else{
    console.log("number is greater than 5");
}
*/

//+++ we can use nested if also 

/*if(a<7){
    if(a>5){
        console.log("the number is greater than 5 and less than 7");
    }
    else {
        console.log("number is less than 5 and 7 both");
    }
}*/

// null coalescing operator , basically reject the null and undefined values , 

let val1;
//val1= 5??10;
val1= null??10;
console.log(val1);


//ternary operatpr
// condition?true:false;

let val = 80>1?1:0;
console.log(val);