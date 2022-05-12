'use strict';

const users = JSON.parse(localStorage.getItem('users')) || [];

import { firstName, lastName, email, password } from './validator.js';
import { signUpStatusOk } from './validator.js';

const signUpForm = document.querySelector('.signup-form');
const formModal = document.querySelector('.sign-modal');

signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if(signUpStatusOk()) {
            if(userAlreadyExists(email.value)) {
                showModal('Usuário já existente!');
                hideModal();
            } else {
                users.push(
                    {
                        id: users.length+1,
                        firstName: firstName.value,
                        lastName: lastName.value,
                        email: email.value,
                        password: password.value,
                        isAdmin: false,
                    },
                );
                showModal('Cadastro realizado com sucesso!');
                hideModal();
                localStorage.setItem('users', JSON.stringify(users));
            }
            return;
        }

        showModal('Preencha todos os campos corretamente!');
        hideModal();
});

function showModal(text) {
    formModal.textContent = text;
    formModal.classList.add('show-modal');
}

function hideModal() {
    setTimeout(function() {
        formModal.classList.remove('show-modal');
    }, 2000);
}

function userAlreadyExists(email) {
    const user = users.find(user => user.email == email);
    return user && true || false; 
}