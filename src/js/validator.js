function isValidEmail(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return (expression.test(email));
}

const isValidPassword = password => password.length > 7; 

const isEmptyInput = value => {
    if (!value) return 'Campo obrigatório';
};

// ================LOGIN VALIDATE=======================

export const login_email = document.querySelector('.login-form #login-email');
const login_email_error = document.querySelector('.login-form .login_email_error');
export const login_password = document.querySelector('.login-form #login-password');
const login_password_error = document.querySelector('.login-form .login_password_error');

login_email.addEventListener('blur', () => {
    login_email_error.textContent = isEmptyInput(login_email.value) || !isValidEmail(login_email.value.trim()) && 'Email Inválido!' || '';
});

login_password.addEventListener('blur', () => {
    login_password_error.textContent = isEmptyInput(login_password.value) || !isValidPassword(login_password.value) && 'A senha precisa ter no mínimo 8 caracteres!' || '';
});

// ==================SIGN UP VALIDATE=====================

export const firstName = document.querySelector('.signup-form #firstName');
const emptyFirstName = document.querySelector('.signup-form .emptyFirstName');
export const lastName = document.querySelector('.signup-form #lastName');
const emptyLastName = document.querySelector('.signup-form .emptyLastName');
export const email = document.querySelector('.signup-form #email');
const email_error = document.querySelector('.signup-form .email_error');
export const password = document.querySelector('.signup-form #password');
const password_error = document.querySelector('.signup-form .password_error');
export const password_confirm = document.querySelector('.signup-form #password_confirm');
const password_confirm_error = document.querySelector('.signup-form .password_confirm_error');

firstName.addEventListener('blur', () => emptyFirstName.textContent = isEmptyInput(firstName.value) || '');

lastName.addEventListener('blur', () => emptyLastName.textContent = isEmptyInput(lastName.value) || '');

email.addEventListener('blur', () => email_error.textContent =  isEmptyInput(email.value) || !isValidEmail(email.value.trim()) && 'Email Inválido!' || '');

password.addEventListener('blur', () => {
    password_error.textContent = isEmptyInput(password.value) || !isValidPassword(password.value) && 'A senha precisa ter no mínimo 8 caracteres!' || '';
});

password_confirm.addEventListener('blur', () => {
    password_confirm_error.textContent = isEmptyInput(password_confirm.value) || !(password.value === password_confirm.value) && 'As senhas digitadas não são as mesmas.' || '';
});

export function signUpStatusOk() {
    if(!isEmptyInput(firstName.value) && !isEmptyInput(lastName.value) && isValidEmail(email.value) && isValidPassword(password.value) && (password.value === password_confirm.value)) {
        return true;
    }
    
    return false;
}

export function loginStatusOk() {
    if(isValidEmail(login_email.value) && isValidPassword(login_password.value)) {
        return true;
    }

    return false;
}