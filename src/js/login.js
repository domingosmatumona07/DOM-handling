'use strict';

import { login_email, login_password } from './validator.js';
import { loginStatusOk } from './validator.js';
import { authentication } from './auth.js';

const loginForm = document.querySelector('.login-form');
const formModal = document.querySelector('.login-modal');

loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if(loginStatusOk()) {
            authentication(login_email.value, login_password.value);
            return;
        }

        showModal('Preencha todos os campos corretamente!');
});



function showModal(text) {
    formModal.textContent = text;
    formModal.classList.add('show-modal');
    setTimeout(function() {
        formModal.classList.remove('show-modal');
    }, 1300);
}