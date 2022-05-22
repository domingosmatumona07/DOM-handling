
function setDefault() {
    'use strict';

    const users = JSON.parse(localStorage.getItem('users')) || [
        {
            id: 1,
            firstName: 'Genilson',
            lastName: 'Araújo',
            email: 'genilsonaraujo07@gmail.com',
            password: '123456780',
            isAdmin: true,
            status: 'Offline',
        }
    ];

    const usersLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn')) || [];

    localStorage.setItem('userLoggedIn', JSON.stringify(usersLoggedIn));
    localStorage.setItem('users', JSON.stringify(users));

}

setDefault();