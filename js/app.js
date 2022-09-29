//Kiara Castillo Magallanes
//09-29-2022
//Peak Pixels



//Accessing the ID Square
let square = document.getElementById("Squarecambio")
square.style.backgroundColor="#074217"; // color background
let cuaHeight="100";//variable to store the height of the object
let cuaWidth="100"; //variable to store the width of the object
square.style.height=cuaHeight+"px";
square.style.width=cuaWidth+"px";



function la() {
    //accessing the div using id square 
    cuaWidth=cuaWidth* "1.1" ; //getting the width from the div and increasing 10% , adding px to it.
    cuaHeight = cuaHeight* "1.1";//getting the height from the div and increasing 10% , adding px to it. 
    square.style.width=cuaWidth+"px";
    square.style.height=cuaHeight+"px";
    console.log(cuaWidth);
    console.log(cuaHeight);
}





