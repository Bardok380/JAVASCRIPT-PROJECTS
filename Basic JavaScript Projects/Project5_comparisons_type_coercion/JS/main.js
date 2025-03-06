document.write(typeof "apple"); //Operator to identify "apple" as a string 
document.write("\n / \n"); //Adds a space before and after the forward slash mark
document.write(typeof 13); //Operator to identify '13' as a number 

document.write("<br>"); //Moves next statement to a new line

document.write("20" + 24); //Creates an example of a coercion creating the outcome of "2024"

function NaN1(){
    document.getElementById("test1") .innerHTML = 0/0; //Creates a clickable element that displays if the number is a NaN element
} 

function NaN2(){
    document.getElementById("test2") .innerHTML = isNaN('apple pie'); //Creates a clickable element that displays the isNaN result of true when clicked due to 'apple pie' being a string
}

function NaN3(){
    document.getElementById("test3") .innerHTML = isNaN('013'); //Creates a clickable element that displays the isNaN result of false when clicked due to '013' being a number
}

function Infi(){
    document.getElementById("test4") .innerHTML = 13E310; //Creates a clickable element that displays that the number is an inifinity due to the constraints of the languages of the world
}

function NegInfi(){
    document.getElementById("test5") .innerHTML = -15E310; //Creates a clickable element  that displays that the number is a negative inifinity due to the constraints of the languages of the world
}

document.write("<br><br>"); //creates a double space between elements on the webpage

document.write(13>5); //Boolean logic that displays true on the webpage

document.writeln("\n / \n");

document.write(45<8); //Boolean logic that displays false on the webpage

document.writeln("<br>");

console.log(6 * 5); //Displays the product on the console of the web page

console.log(5 > 7); //Dis plays the Boolean logic on the console of the web page

document.writeln("<br>");

document.writeln(15==3 + 12); //Double equal signs indicate that a check of data starting on the left is equal to the data on the right

document.writeln("\n / \n");

document.writeln(9==6-4);

document.writeln("<br><br>");

document.writeln(13 === 13); //A Tripple equal sign indicates that a comparison should be made, if the same type and value of data it results in 'true' if not then 'false'

document.writeln("\n / \n");

document.writeln("apple" === 8);

document.writeln("\n / \n");

document.writeln(5 === "5");

document.writeln("\n / \n");

document.writeln("apple" === "orange");

document.writeln("<br><br>");

document.writeln(5<8 && 6>2); //The double ambersands indicate the 'AND' in logical operators if both values are true then it responds with 'true' if one or both are different it returns 'false'

document.writeln("\n / \n");

document.writeln(4<1 && 5>9);

document.writeln("<br><br>");

document.writeln(4>3 || 8>6);//'||' indicaters the OR logical operator meaning if one or the other value is true then it will return 'true' if neither is true then 'false' is returned

document.writeln("\n / \n");

document.writeln(6<5 || 4>9);

function not_Function(){
    document.getElementById("Not1") .innerHTML = ! (13 < 25); //the '!' is the symbol for 'NOT', if used with something that is true the response is 'false' and if used with something that is false 'true' is returned
}

function dblnot_Function(){
    document.getElementById("Not2") .innerHTML = ! (9 > 22);
}