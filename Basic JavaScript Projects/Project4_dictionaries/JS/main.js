function Alpha(){
    var Animal = {
        Species:"Dog",
        Color:"White",
        Breed:"Sharpei",
        Age:"1",
        Sound:"Bark"
    };
    delete Animal.Age; //Deletes the age category in the Animal variable
    document.getElementById("Dictionary") .innerHTML = Animal.Age; //How to select which part of the Dictionary to pull the information from
}