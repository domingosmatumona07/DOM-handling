function isValidEmail(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

const isValidPassword = password => password.length > 7;

const nameIsNotEmpty = name => name;

// ================LOGIN VALIDATE=======================

const login_email = document.querySelector(".login-form #login-email");
const invalidEmailText = document.querySelector(".login-form .invalid-email");
const login_password = document.querySelector(".login-form #login-password");
const invalidPassText = document.querySelector(".login-form .invalid-password");

login_email.addEventListener("blur", () => {
    invalidEmailText.textContent = !isValidEmail(login_email) && 'Email Inválido!' || '';
});

login_password.addEventListener("blur", () => {
    invalidPassText.textContent = !isValidPassword(login_password) && 'A senha precisa ter no mínimo 8 caracteres!' || '';
});

// ==================SIGN UP VALIDATE=====================

const firstName = document.querySelector(".signup-form #firstName");
const lastName = document.querySelector(".signup-form #lastName");
const email = document.querySelector(".signup-form #email");
const password = document.querySelector(".signup-form #password");
const confirm_password = document.querySelector(".signup-form #confirm-password");

firstName.addEventListener('blur', () => { 
    emptyFirstName.textContent = nameIsNotEmpty(firstName) && '' || 'Campo obrigatório';
});

lastName.addEventListener('blur', () => {
    emptyLastName.textContent = nameIsNotEmpty(lastName) && '' || 'Campo obrigatório';
});

email.addEventListener('blur', () => {
    invalidEmailText.textContent = !isValidEmail(login_email) && 'Email Inválido!' || '';
});

confirm_password.addEventListener('click', () => {
    invalidPassText.textContent = !isValidPassword(login_password) && 'A senha precisa ter no mínimo 8 caracteres!' || '';
})