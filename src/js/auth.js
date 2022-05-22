'use strict';

export function authentication(email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if(userExists(users, email, password)) {
        const userIndex = getUserIndex(users, email);
        let user = users[userIndex];

        user = {...user, status: 'Online'};
        users[userIndex] = user;
        localStorage.setItem('users', JSON.stringify(users));

        showModal('Login sucessful');
        if(user.isAdmin) {
            saveAdminLoggedIn(user); 
            goToAdminPage();
            return;
        }
        saveUserLoggedIn(user);
        goToUserHomePage();
        
        return;
    }

    if(getUserIndex(users, email) !== -1) {
        showModal('Wrong password! Try again.');
        return;
    }

    showModal('There is no registered user with this email.');
    return;
}

function userExists(users, email, password) {
    const user = users.find(user => (user.email === email && user.password === password));
    return user && true || false;
}

function getUserIndex(users, email) {
    const userIndex = users.findIndex(user => user.email === email);
    return userIndex;
}

function goToAdminPage() {
    setTimeout(() => {
        document.location = 'http://127.0.0.1:5500/src/pages/admin.html'
        }, 1200);
}

function goToUserHomePage() {
    setTimeout(() => {
        document.location = 'http://127.0.0.1:5500/src/pages/homePage.html'
        }, 1200);
}

function saveUserLoggedIn(user) {
    localStorage.setItem('userLoggedIn', JSON.stringify(user));
}

function saveAdminLoggedIn(user) {
    localStorage.setItem('adminLoggedIn', JSON.stringify(user));
}

function showModal(text) {
    const formModal = document.querySelector('.login-modal');
    formModal.textContent = text;
    formModal.classList.add('show-modal');
    setTimeout(function() {
        formModal.classList.remove('show-modal');
    }, 1400);
}