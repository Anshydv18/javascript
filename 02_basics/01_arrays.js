let myheros =[1,2,3,4,5,6];
console.log(myheros);

let myArr = new Array(0,1,2,3,4,5);
console.log(myArr);

//we can perform 4 operation as simple ,push ,pop,unshift,shift;
//  myArr.push(11);
//  console.log(myArr);
//  myArr.pop();
//  console.log(myArr);
//  myArr.unshift(22);
//  console.log(myArr);
//  myArr.shift();
//  console.log(myArr);

//we can check that the array includes the element or not

// console.log(myArr.includes(13));
// console.log(myArr.indexOf(2));

let jointed = myArr.join();
console.log(jointed); // we changed the array in string

/* the difference b/w slice and splice is 
slice(startindex,endINdex-1);
splice(startind,length) ** but it changes the origingal array
 */
 let sliced = myArr.slice(1,4);
 
 console.log(sliced);
 console.log(myArr);
 let spliced = myArr.splice(3,2);
 console.log(spliced);
 console.log(myArr);