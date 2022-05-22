'use strict';

/* USERS HEADER */

import { deleteUserById } from './crud.js';

let users = JSON.parse(localStorage.getItem('users')) || [];
const adminName = document.querySelector('.admin-info .adminName');
const adminLoggedIn = JSON.parse(localStorage.getItem('adminLoggedIn'));

adminName.textContent = `${adminLoggedIn.firstName} ${adminLoggedIn.lastName}`;

let usersLength = 0;
users.forEach(user => {
    !(user.isAdmin) && usersLength++;
});

const usersFound = document.querySelector('.usersFound');
usersFound.textContent = usersLength > 1 && `${usersLength} users found` || `${usersLength} user found`;

/* USERS BODY */
const usersContainer = document.querySelector('.users');

function renderUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach((user) => {
        if(!user.isAdmin) {
            callback(user);
        }
    });

    if(users.length > 9) document.querySelector('main').style.overflowY = 'scroll';
    else document.querySelector('main').style.overflowY = 'hidden';
}

function callback({ id, firstName, lastName, email, status }) {
    const userElement = document.createElement('div');
    userElement.classList.add('user');
    userElement.setAttribute('userId', id);

    userElement.innerHTML = `
        <div class="left">
            <div>${id}</div>
            <div>${firstName} ${lastName}</div>
            <div>${email}</div>
        </div>
        <div class="right">
            <div>10 Mai 2022</div>
            <div>${status}</div>
            <div class="iconsContainer">
                <i class="fas fa-cog settings"></i>
                <i class="fas fa-angle-down down-angle">
                    <div class="dropdown">
                        <div>
                            <button class="delete" userId="${id}">Delete</button>
                        </div>
                        <div>
                            <label for="${id}" style="cursor: pointer;">Admin</label>
                            <input type="checkbox" name="addAdmin" class="addAdmin" id="${id}">
                        </div>
                    </div>
                </i>
          </div>
        </div>
    `;

    usersContainer.appendChild(userElement);
}

document.addEventListener('click', (e) => {
    const target = e.target;
    if(e.target.classList.contains('delete')) {
        deleteUser(target.getAttribute('userId'));
    }
});

function deleteUser(userId) {
    deleteUserById(users, userId);

    usersLength--;
    usersFound.textContent = `${usersLength} users found`;

    usersContainer.innerHTML = '';
    searchResult.innerHTML = '';
    renderUsers();
}

/* SEARCH */

const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('#search-input');
searchInput.addEventListener('input', searchUser);

const searchButton = document.querySelector('#search');
const closeSearch = document.querySelector('#close-search');
searchButton.addEventListener('click', () => {
    searchContainer.style.display = 'block';

    searchButton.style.display = 'none';
    closeSearch.style.display = 'inline';
});

closeSearch.addEventListener('click', () => {
    searchContainer.style.display = 'none';

    closeSearch.style.display = 'none';
    searchButton.style.display = 'block';
    usersFound.textContent = usersLength > 1 && `${usersLength} users found` || `${usersLength} user found`;
    renderUsers();
});

function searchUser() {
    const text = searchInput.value.trim();
    const users = JSON.parse(localStorage.getItem('users'));
    const names = users.map((user) => `${user.firstName} ${user.lastName}`);

    let usersFounded = [];

    names.forEach((name) => {
        if(name.toLowerCase().includes(text.toLowerCase())) {
            usersFounded.push(users.find((user) => `${user.firstName} ${user.lastName}` === name));
        }
    });

    length = 0;
    usersFounded.forEach(user => {
        !user.isAdmin && length++;
    });

    usersFound.textContent = length > 1 && `${length} users found` || `${length} user found`;

    if(usersFounded) {
        usersContainer.innerHTML = '';
        usersFounded.forEach(user => {
            !user.isAdmin && callback(user);
        });
    }
}

renderUsers();