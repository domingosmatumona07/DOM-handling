(function(){
    'use strict';

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
})();