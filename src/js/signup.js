'use strict';

import { createUser } from './crud.js'; 
import { firstName, lastName, email, password, signUpStatusOk } from './validator.js';

const signUpForm = document.querySelector('.signup-form');
const formModal = document.querySelector('.sign-modal');

signUpForm.addEventListener('submit', (event) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        event.preventDefault();
        if(signUpStatusOk()) {
            if(userAlreadyExists(email.value, users)) {
                showModal('This user already exists!');
            } else {
                createUser(firstName.value, lastName.value, email.value, password.value);
                showModal('Register sucessful!');
                setTimeout(() => {
                    document.location = 'http://127.0.0.1:5500/src/index.html';
                }, 1150);
            }
            return;
        }

        showModal('Preencha todos os campos corretamente!');
        hideModal();
});

function showModal(text) {
    formModal.textContent = text;
    formModal.classList.add('show-modal');
    setTimeout(function() {
        formModal.classList.remove('show-modal');
    }, 1300);
}

function userAlreadyExists(email, users) {
    const user = users.find(user => user.email == email);
    return user && true || false; 
}