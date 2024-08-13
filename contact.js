function validateForm() {
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var query = document.getElementById('query').value;

    var fnameError = document.getElementById('fnameError');
    var emailError = document.getElementById('emailError');
    var textError = document.getElementById('textError');

    fnameError.textContent = "";
    emailError.textContent = "";
    textError.textContent = "";

    var isValid = true;

    if (fname.trim() === "") {
        fnameError.textContent = " Name is required";
        isValid = false;
    }

    if (email.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email address";
        isValid = false;
    }

    if (query.trim() === "" || query.trim() <=1) {
        textError.textContent = " Query is too small";
        isValid = false;
    }
    

    return isValid;
}

function isValidEmail(email) {

    var re =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.\.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
}

