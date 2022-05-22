function isValidEmail(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return (expression.test(email));
}

const isValidPassword = password => password.length > 7; 

const isEmptyInput = value => {
    if (!value) return 'Campo obrigatório';
};

// ================LOGIN VALIDATE=======================

const loginForm = document.querySelector('.login-form');

export const login_email = document.querySelector('.login-form #login-email');
export const login_password = document.querySelector('.login-form #login-password');

login_email.addEventListener('blur', () => {
    loginForm.querySelector('.login_email_error').textContent = isEmptyInput(login_email.value) || !isValidEmail(login_email.value.trim()) && 'Email Inválido!' || '';
});

login_password.addEventListener('blur', () => {
    loginForm.querySelector('.login_password_error').textContent = isEmptyInput(login_password.value) || !isValidPassword(login_password.value) && 'A senha precisa ter no mínimo 8 caracteres!' || '';
});

// ==================SIGN UP VALIDATE=====================

const signUpForm = document.querySelector('.signup-form');

export const firstName = document.querySelector('.signup-form #firstName');
export const lastName = document.querySelector('.signup-form #lastName');
export const email = document.querySelector('.signup-form #email');
export const password = document.querySelector('.signup-form #password');
export const password_confirm = document.querySelector('.signup-form #password_confirm');

firstName.addEventListener('blur', () => {
    signUpForm.querySelector('.emptyFirstName').textContent = isEmptyInput(firstName.value) || '';
});

lastName.addEventListener('blur', () => {
    signUpForm.querySelector('.emptyLastName').textContent = isEmptyInput(lastName.value) || '';
});

email.addEventListener('blur', () => {
    signUpForm.querySelector('.email_error').textContent =  isEmptyInput(email.value) || !isValidEmail(email.value.trim()) && 'Email Inválido!' || ''
});

password.addEventListener('blur', () => {
    signUpForm.querySelector('.password_error').textContent = isEmptyInput(password.value) || !isValidPassword(password.value) && 'A senha precisa ter no mínimo 8 caracteres!' || '';
});

password_confirm.addEventListener('blur', () => {
    signUpForm.querySelector('.password_confirm_error').textContent = isEmptyInput(password_confirm.value) || !(password.value === password_confirm.value) && 'As senhas digitadas não são as mesmas.' || '';
});

export function signUpStatusOk() {
    if(!isEmptyInput(firstName.value) && !isEmptyInput(lastName.value) && isValidEmail(email.value) && isValidPassword(password.value) && (password.value === password_confirm.value)) {
        return true;
    }
    
    return false;
}

export function loginStatusOk() {
    if(isValidEmail(login_email.value) && isValidPassword(login_password.value)) return true;
    return false;
}