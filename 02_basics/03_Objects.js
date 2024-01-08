const mysbl = Symbol("mykey");
let student ={
    name:"Ansh",
    course:"Btech",
    branch:"CSAI",
    Rollno:2101921520035,
    [mysbl]:"private key",
    email:"anshyadav21002@gmail.com"
};

//we can can't define symbol normally as like primitive
console.log(student);
// console.log(student.name);
// console.log(student["name"]);

//we can freeze the change in the object by using freez functions

// student.email="anshGithub@gmail.com";
// console.log(student.email);
// Object.freeze(student);
// student.email="anshdarock222@gmail.com";
// console.log(student.email);


student.greeting=function(){
    console.log("hello ji");
}
console.log(student);
console.log(student.greeting());