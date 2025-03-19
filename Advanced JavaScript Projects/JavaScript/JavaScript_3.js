function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " series is written by " + character.innerHTML + ".");
}