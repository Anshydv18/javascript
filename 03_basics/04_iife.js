// immediate invoke function expressions

/* ()() iife is defined with the first wrap and called by the second wrap*/
//if the iife is defined by name , it is called named iife 
(function chai(){
    console.log("Db started");
})();

//if we have to write continous two iife function  then we have to stop first one by using semicolon ;

((username)=>{
    console.log(`${username} , welcome to our db`);
})('Ansh')