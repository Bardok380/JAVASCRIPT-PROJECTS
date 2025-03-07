function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height") .value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride") .innerHTML = Can_ride + " to ride.";
}

function Vote_Function(){
    var Age, Can_vote;
    Age = document.getElementById("Age") .value;
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough";// The response you will recieve after entering the age you want to provide
    document.getElementById("Vote") .innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color){ //Vehicle is the consrtuctor of this function
    this.Vehicle_Make = Make; //'this' is a key word that is referencing 'Vehicle' in the function line and is used to create a placeholder
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", "2020", "Red"); //'new' is a keyword that is used to create objects within the Vehicle function
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "White and Black");
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors") .innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Chocolate(Flavor, Color, Size){
    this.Chocolate_Flavor = Flavor; //
    this.Chocolate_Color = Color;
    this.Chocolate_Size = Size;
}
var Ray = new Chocolate("Peanut Butter", "Orange", "Sharing");
var Elisa = new Chocolate("White Chocolate", "Purple", "Family");
var Frank = new Chocolate("Dark Chocolate", "Brown", "Individual");
function M_n_Ms_Function(){
    document.getElementById("New_and_This") .innerHTML = "Ray enjoys a " + Ray.Chocolate_Size + " size pack of " + Ray.Chocolate_Flavor + " M&M's while watching movies, especially the " + Ray.Chocolate_Color + " ones.";
}

function count_Function(){
    document.getElementById("Nested_Function") .innerHTML = Count();
    function Count(){ //This function and the one after it are known as nested functions, they are connected to the functions that came before them
        var Starting_point = 12;
        function Plus_one() {Starting_point += 1;}
        Plus_one() ;
        return Starting_point;
    }
}