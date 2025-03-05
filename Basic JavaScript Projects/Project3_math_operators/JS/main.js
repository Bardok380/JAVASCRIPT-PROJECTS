function addition_function(){ //Adds the integers together
    var Addition = 5 + 9;
    document.getElementById("Math") .innerHTML = "5 + 9 = " + Addition;
}

function subtraction(){ //Subtracts one integer from the other
    var Subtraction = 9 - 7;
    document.getElementById("Math2") .innerHTML = "9 - 7 = " + Subtraction;
}

function multiply(){ //multiplies the two integer together
    var Multiplication = 9 * 8;
    document.getElementById("Draig") .innerHTML = "9 * 8 = " + Multiplication;
}

function divide(){ //Divides one integer by the other
    var Division = 64 / 4;
    document.getElementById("Albion") .innerHTML = "64 / 4 = " + Division;
}

function combo(){ //An Equation that follows the rules of 'PEMDAS'
    var simple_Math = (2 + 5) * 8 / 2 -6;
    document.getElementById("Math5") .innerHTML = "2 plus 5, multiplied by 8, divided in half and then subtracted by 6 equals " + simple_Math;
}

function modulus(){ //If the equation creates a decimal instead of a whole number the first number after the decimal is designated as the remainder
    var remainder = 48 % 9;
    document.getElementById("Math6") .innerHTML = "When you divide 48 by 9 you have a remainder of: " + remainder;
}

function negative(){ //creates the numerical opposite of the integer chosen
    var Z = 13;
    document.getElementById("Math7") .innerHTML = -Z;
}

var X = 7;
X++; //Adds one whole integer to the specified variable
document.write(X);

document.write("<br>"); //Adds line inbetween the two answers

var Y = 19;
Y--; //Removes one whole integer from specified variable
document.write(Y);

window.alert(Math.random() * 100); //Generates a random number between 0 and 100 in a window upon opening or a refresh of screen

document.getElementById("Math8") .innerHTML = Math.PI; //A mathmatical constant that shows the number PI to the 15th decimal 