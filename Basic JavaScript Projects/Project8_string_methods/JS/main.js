function slice_Method(){ //Slice method takes a section of sentence indicated and isolates the slice to be put on the webpage
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice") .innerHTML = Section;
}

function upper_Case(){ //Regardless of how a string is written it will be Uppercase
    let text = document.getElementById("Upper") .innerHTML;
    document.getElementById("Upper") .innerHTML = text.toUpperCase();
}

let text = "Please locate where 'apple' occurs";
let index = text.search("apple");
document.getElementById("Search") .innerHTML = index;

function string_Method(){ //The toString() method puts the value specified in to the string format even if it is a number.
    var Z = 1313;
    document.getElementById("String_practice") .innerHTML = Z.toString();
}

function precision_Method(){ //The toPrecision() Method rounds the specified number to the specified amount of numbers.
    var X = 151213.5987426658751384658465843;
    document.getElementById("precision") .innerHTML = X.toPrecision(8);
}

let num = 12.58791325465; 
let n = num.toFixed();
document.getElementById("toFixed_practice") .innerHTML = n;

let string = "Apple pie is good but Berry pies are better"; //Unable to reuse the "let ???" value of text again so replaced with 'string'
let result = string.valueOf();
document.getElementById("value_practice") .innerHTML = result;