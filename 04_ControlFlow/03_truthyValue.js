const username = "";
if(username){
    console.log("got username");
}
else{
    console.log("not got username");
}

//falsy value : false, 0,-0, bigint(0n), null, undefined , Nan

//critical truthy values : '0' ,'false' (becase they are string) , ' '(space string),{},[],function(){},


/* ### imp;
1.if we have to check any array empty then , we can call arr.length()==>to check its length , empty or not
2. what if we have to check the size of the object => object.keys(objectName).length()
*/