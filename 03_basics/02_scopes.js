/* we can define function in functions but their scope are like parent and children ,children can ask icecream from their parents 
but their parent cannot ask incream from them */
function one(){
    const username="Rao";
    function two(){
        console.log(`${username} is back in the city`);
    }
    two();
}
one();

//the total is game is scope {} let has a limited scope in comparisonn of var , var is initialised globally 
