// While Loop: This loop is basically a repeating if statement
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 14) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop") .innerHTML = Digit;
}

// For Loop: Used to repeat a section of code a number of times when the number of iterations are known
var Instruments = ["Piccolo", "Hurdy Gurdy", "Castanetes", "Steel Drum", "Hand Pan", "Balalaika"];
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments") .innerHTML = Content;
}

//Array Function
function array_Function(){
    var Fruit = []
    Fruit[0] = "apples";
    Fruit[1] = "oranges";
    Fruit[2] = "lemons";
    Fruit[3] = "bananas";
    document.getElementById("Array") .innerHTML = "Why do people tend to compare " + Fruit[0] + " and " + Fruit[1] + "?";
}

//Constant Function: Constants are similar ti variables but they cannot be changed while variables can.
function constant_function(){
    const Lego_Set = {type:"T-Rex Skeleton", set:"Jurassic World", pieces:"3100"};
    Lego_Set.release = "March";
    Lego_Set.price = "$250";
    Lego_Set.set = "Jurassic Park";
    document.getElementById("Constant") .innerHTML = "The set of Legos comes from the " + Lego_Set.set + " universe and the price is " + Lego_Set.price + ".";
}

// Let: The Keyword 'let' allows you to set a specific word within a block scope inside curly brackets
function Let_Function(){
    let Chocolate = []
    Chocolate[0] = "white";
    Chocolate[1] = "milk";
    Chocolate[2] = "dark";
    document.getElementById("Let") .innerHTML = "One of the better drinks I have had is " + Chocolate[0] + " hot chocolate from Ghirardelli Chocolates in San Francisco, CA!";
}

//Return: stops the execution of a function and returns a value
document.getElementById("return").innerHTML = Name_Function("Raymond");
function Name_Function(name){
    return "Hello " + name;
}

// Object (Let)
let Video_Game = {
    system: "Playstation 2",
    title: "Kingdom Hearts ",
    release: "2002 ",
    difficulty: "3 / 10",
    description : function(){ // Able to substitute 'this' for the title object
        return "One of the best Disney and Square Enix collabs is " + this.title + "for the " + this.system + ".<br> It was released in " + this.release + "and in my opinion the difficulty of playability,<br> with 1 being very easy and 10 being very hard, is a " + this.difficulty + ".";
    }
};
document.getElementById("Video_Game_Object") .innerHTML = Video_Game.description();

//Break: The Break statement can be used to jump out of or "break" a loop.
let text = "";
for (let i = 0; i < 13; i++) {
    if (i === 8) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("Break_Loop") .innerHTML = text;

//Continue: The Continue Loop is similar to the Break Loop but instead of stopping it the specified step is skipped.
let letters = "";
for (let i = 0; i < 14; i++) {
    if(i === 7) { continue; }
    letters += "The number is " + i + "<br>";
}
document.getElementById("Cont._Loop") .innerHTML = letters;