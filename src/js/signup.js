'use strict';

import { createUser } from './crud.js'; 
import { firstName, lastName, email, password, signUpStatusOk } from './validator.js';

const signUpForm = document.querySelector('.signup-form');
const formModal = document.querySelector('.sign-modal');

signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if(signUpStatusOk()) {
            if(userAlreadyExists(email.value, users)) {
                showModal('This user already exists!');
            } else {
                createUser(firstName.value, lastName.value, email.value, password.value);
                showModal('Register sucessful!');
                setTimeout(() => {

                }, 1150);
            }
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

const userAlreadyExists = () => users.some(user => user.email === email);