//Switch Statement
function Seuss_Function() {
    var Book_Output;
    var Books = document.getElementById("Seuss_Input") .value;
    var Book_String = " is a great book";
    switch(Books) {
        case "Green Eggs & Ham":
            Book_Output = "Green Eggs & Ham" + Book_String;
        break;
        case "Cat in the Hat":
            Book_Outputt = "Cat in the Hat" + Book_String;
        break;
        case "Horton Hears a Who":
            Book_Output = "Horton Hears a Who" + Book_String;
        break;
        case "The Lorax":
            Book_Output = "The Lorax" + Book_String;
        break;
        case "How the Grinch Stole Christmas":
            Book_Output = "How the Grinch Stole Christmas" + Book_String;
        break;
        default:
            Book_Output = "Please enter a book title exactly as written on the above list.";
    }
    document.getElementById("Output") .innerHTML = Book_Output;
}

//ElementsByClass
function EvilBerry() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "Raw tomatoes are horrible, cooked is better.";
}

//Canvas
var c = document.getElementById("Frame");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2*Math.PI);
ctx.stroke();

