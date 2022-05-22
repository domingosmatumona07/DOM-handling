'use strict';

export const users = JSON.parse(localStorage.getItem('users')) || [
    {
        id: 1,
        firstName: 'Domingos',
        lastName: 'Matumona',
        email: 'domingosmatumona73@gmail.com',
        password: '123456780',
        isAdmin: true,
        status: 'Offline',
    }
];

export const usersLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn')) || [];

localStorage.setItem('userLoggedIn', JSON.stringify(usersLoggedIn));
localStorage.setItem('users', JSON.stringify(users));
