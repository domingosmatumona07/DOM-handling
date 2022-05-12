const loginForm = document.querySelector('.login-form');
const signUpForm = document.querySelector('.signup-form');

const loginButton = document.querySelector('button.login');
const signUpButton = document.querySelector('button.signup');

const formHeading = document.querySelector('.form-heading');

loginButton.addEventListener('click', () => {
    signUpForm.style.display = 'none';
    loginForm.style.display = 'block';
    formHeading.textContent = 'LOGIN';
});

signUpButton.addEventListener('click', () => {
    loginForm.style.display = 'none';
    signUpForm.style.display = 'block';
    formHeading.textContent = 'SIGN UP';
});