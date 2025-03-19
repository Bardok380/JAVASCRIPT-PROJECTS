function validateForm() {
    let x = document.forms["RCCForm"] ["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}