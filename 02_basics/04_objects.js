const student={
    email:"rk@weebly.com",
     fullname:{
        firstname:{
            name:"Ansh"
        },
         sec:{
            name:"Yadav"
        }
    },
    branch:"csai"
};

// console.log(student.fullname);

//we can cancat to arrays

let obj1 ={1:'a', 2:'b'};
let obj2 = {3:'c', 4:'d'};
// let obj3 = Object.assign({},obj1,obj2); this is a simple way of merging two or more objects in an emmpty object
let obj3 ={...obj1,...obj2};
console.log(obj3);