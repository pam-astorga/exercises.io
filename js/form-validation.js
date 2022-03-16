let register = document.querySelector("#registration");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password") ;

register.addEventListener('input', (event) => {
    //console.log(event.target.id);
    switch(event.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password': 
            checkPassword();
            break;
        case 'confirmPassword':
            checkConfirm();
            break;
        default: "error"
    }
})

register.addEventListener("submit", (event) => {
    //prevent the form from submitting
    event.preventDefault();
    
    checkUsername();    
    checkEmail();
    checkPassword();
    checkConfirm();    
})



function checkUsername() {
    let username = document.querySelector("#username");
    if (username.value == "") {
        document.getElementById("error-username").innerHTML = "Username is required.";
    } else {
        let userN = username.value.trim();
        if (userN.length < 5 || userN.length >= 16) {
            document.getElementById("error-username").innerHTML = "The username must have 5 to 16 characters.";
        } else {
            document.getElementById("error-username").innerText = "Username is available";
        }
    }
}

function checkEmail() {
    let email = document.querySelector("#email");
    if (email.value == "") {
        document.getElementById("error-email").innerHTML = "Fill out the email.";
    } else {
        let regularExpression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        let emailN = email.value.trim();
        //console.log(regularExpression.test(emailN));
        if(regularExpression.test(emailN)) {
            document.getElementById("error-email").innerHTML = "Correct email format";
        } else {
            document.getElementById("error-email").innerHTML = "Wrong email format";
        }
    } 
}

function checkPassword() {
    let password = document.querySelector("#password");
    if (password.value == "") {
        document.getElementById("error-password").innerHTML = "Fill out the password.";
    } else {
        let regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        let passwordN = password.value.trim();
        if(passwordN.length < 5) {
            document.getElementById("error-password").innerHTML = "Password must contain more than 5 characters";
        } 
            if(!regularExpression.test(passwordN)) {
                document.getElementById("error-password").innerHTML = "Password must contain 1 upppercase letter, 1 number, and a symbol";
            } else {
                document.getElementById("error-password").innerHTML = "Password accepted.";
            }
    } 
}

function checkConfirm() {
    let confirmPassword = document.querySelector("#confirm-password") ;
    if (confirmPassword.value == "") {
        document.getElementById("error-confirm").innerHTML = "Fill out the confirm password.";
    } else {
        let passwordN = password.value.trim();
        let confirmPasswordN = confirmPassword.value.trim();
        if (confirmPasswordN === passwordN) {
            document.getElementById("error-confirm").innerHTML = "Password matched";
        } else {
            document.getElementById("error-confirm").innerHTML = "Password does not match. Try again!";
        }
    }
}


