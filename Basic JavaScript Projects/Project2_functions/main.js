function My_First_Function() {
    var str = "Roses are red, Violets are blue"; //Text that is revealed when the button is clicked
    document.getElementById("Button_Text") .innerHTML = str; //Link to the "id= Button_Text"
}

function myFunction(){
    var sentence = "I am learning";
    sentence += " a lot from this course!"; //Text that replaces the text "Click Here!"
    document.getElementById("Concatenate") .innerHTML = sentence; //Link to the "id= Concatenate" 
}