function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    if (username === "" || email === "") {
        alert("make sure to fill the inputs");
        return false;
    }

    alert('registred successfully')

    // Prevent the form from actually submitting (for demonstration purposes).
    return false;
}

document.getElementById('submit').addEventListener('click', function(){
    validateForm();
});

alert('hello');