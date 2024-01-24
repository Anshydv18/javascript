//for the event listening ,there are many process such as , 
// onclick used in the tag of html or in other word the javascript which is injected in the code of the html

//document.getElementById('blue').onclick = ()=>{console.log("clicked on the blue color")}
//the above is also a way to do events control


//the best and the modern way to listen or track any elevent on anything just go for
//add event listners

// document.getElementById('blue').addEventListener('click',function(e){
//     console.log("clicked over the blue div")
// },false)

//event capturing is false , as default 
/* false is present for the bubbling , first the inner element will be captured by the event and then its parent node */

// document.getElementById('ullion').addEventListener('click',function(e){
//     console.log("the mouse clicked on the ul ");
// },false)

// document.getElementById('blue').addEventListener('click',function(e){
//     console.log("the blue div has been clicked by the mouse");
// },false)

//if we mark the useCapture as true, then the capture will take place

document.getElementById('ullion').addEventListener('click',function(e){
    console.log("the mouse clicked on the ul ");
},true)

document.getElementById('blue').addEventListener('click',function(e){
    //e.preventDefault(); is used to prevent the default activity that is going to perform by the event
    console.log("the blue div has been clicked by the mouse");
},true)

