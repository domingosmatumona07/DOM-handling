'use strict';

const users = JSON.parse(localStorage.getItem('users')) || [];

import { login_email, login_password } from './validator.js';
import { loginStatusOk } from './validator.js';

const loginForm = document.querySelector('.login-form');

console.log(signUpForm);

loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if(loginStatusOk()) {
            
        } else {
            console.log("Usuário Inexistente");
        }
});
