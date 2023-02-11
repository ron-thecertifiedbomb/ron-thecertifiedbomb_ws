// custom script
// alert('Welcome to JS')

let email = document.forms['form']['email'];
let password = document.forms['form']['password'];
let submit = document.forms['form']['submit'];

let emailError = document.querySelector('#email_error');
let passwordError = document.querySelector('#password_error');

const doEmailVerification = () => {
    console.log('email input event fired')
    if(email.value.length > 8) {
        email.style.border = '3px solid green';
        emailError.style.display = "none";
        emailError.classList.add('visually-hidden');
        submit.disabled = false;
    } else {
        email.style.border = '1px solid red';
        emailError.style.display = "block";
        emailError.classList.remove('visually-hidden');
        submit.disabled = true;
    }
    return true;
}

const doPasswordVerification = () => {
    console.log('password input event fired');
    if(password.value.length > 5) {
        password.style.border = '3px solid green';
        passwordError.style.display = 'none';
        passwordError.classList.add('visually-hidden');
        submit.disabled = false;
        
    } else {
        password.style.border = '1px solid red';
        passwordError.style.display = 'block';
        passwordError.classList.remove('visually-hidden');
        submit.disabled = true;
    }
}

email.addEventListener('input', doEmailVerification);
password.addEventListener('input', doPasswordVerification);

function validate() {
    console.log('validation function called')
    if(email.value.length < 9) {
        email.style.border = '1px solid red';
        emailError.style.display = 'block';
        email.focus();
        return false;
    }
    if(password.value.length < 6) {
        password.style.border = '1px solid red';
        passwordError.style.display = 'block';
        password.focus();
        return false;
    }
}

