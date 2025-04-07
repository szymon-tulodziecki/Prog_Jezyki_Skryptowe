function validateFullName() {
    const field = document.getElementById("fullName");
    const error = document.getElementById("errorName");
    
    error.className = "hide";
    field.classList.remove("is-invalid", "is-valid");

    if (field.value.trim() === "") {
        error.className = "alert alert-danger";
        field.classList.add("is-invalid");
        return false;
    } else {
        field.classList.add("is-valid");
        return true;
    }
}

function validateEmail() {
    const field = document.getElementById("email");
    const error = document.getElementById("errorEmail");
    const email = field.value.trim();
    const regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/;

    error.className = "hide";
    field.classList.remove("is-invalid", "is-valid");

    if (email === "") {
        error.innerHTML = "Adres email jest wymagany!";
        error.className = "alert alert-danger";
        field.classList.add("is-invalid");
        return false;
    } else if (!regex.test(email)) {
        error.innerHTML = "Podano adres email w złym formacie!";
        error.className = "alert alert-danger";
        field.classList.add("is-invalid");
        return false;
    } else {
        field.classList.add("is-valid");
        return true;
    }
}

function validateMessage() {
    const field = document.getElementById("message");
    const error = document.getElementById("errorMessage");
    
    error.className = "hide";
    field.classList.remove("is-invalid", "is-valid");

    if (field.value.trim() === "") {
        error.className = "alert alert-danger";
        field.classList.add("is-invalid");
        return false;
    } else {
        field.classList.add("is-valid");
        return true;
    }
}

function checkForm() {
    const isNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    return isNameValid && isEmailValid && isMessageValid;
}
