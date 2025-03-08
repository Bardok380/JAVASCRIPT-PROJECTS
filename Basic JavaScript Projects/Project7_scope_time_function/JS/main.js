document.writeln("<br><br>"); //'<br>' adds a line break in the out come linked to the style page

var Z = 13; // This is a global variable due to it being used in both equations
function Multiply_Numbers_1(){
    document.writeln(5 * Z + "<br>"); 
}
function Multiply_Numbers_2(){
    document.writeln(Z * Z);
}
Multiply_Numbers_1();
Multiply_Numbers_2();

document.writeln("<br>"); //'document.write' was depreciated and it was replaced with '.writeln' 

function Add_Numbers_1(){
    var Y = 3; //This is a local variable due to only being used in one equation
    document.writeln(Y + 200 + "<br>");
}
function Add_Numbers_2(){
    console.log(Y + 17); //The results will show up in the console not on the webpage, use either 'Inspect' while on Chrome the key short cut "Ctrl = shift + I" on windows computers
}
Add_Numbers_1();
Add_Numbers_2();

function get_Date(){
    if (new Date().getHours() < 16){
        document.getElementById("School") .innerHTML = "Get back to School.";
    }
}

function If_State(){ //If statements can beused a avariety of things to get pre-existing data while generating a response to using provided data and showing which is which
    if (13 < 22){
        document.getElementById("Big or Small") .innerHTML = "The right is bigger than the left";
    }
}

function Drive_Function(){
    Age = document.getElementById("Age") .value;
    if (Age >= 15){
        Drive = "You are old enough to learn how to drive!";
    }
    else {
        Drive = "You are too young to learn how to drive!";
    }
    document.getElementById("How_old_are_you?") .innerHTML = Drive;
}

function Time_function(){
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18){
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day") .innerHTML = Reply;
}