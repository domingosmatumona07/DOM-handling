'use strict';

/* MODAL AND MENU ACTIONs */

function expandMenu() {
    const menuToExpand = document.querySelector('.menu');
    menuToExpand.classList.add('expanded');
}

function closeMenu() {
    const menuToClose = document.querySelector('.menu');
    menuToClose.classList.remove('expanded');
}

function modalAddNotes() {
    container.classList.add('lessOpacity');
    modal.classList.add('show-modal');
}

function closeModal() {
    modal.classList.remove('show-modal');
    container.classList.remove('lessOpacity');
}

/* USER INFO */

const userName = document.querySelector('.user-info .username');
const userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));

userName.textContent = userLoggedIn && `${userLoggedIn.firstName} ${userLoggedIn.lastName}`;
const modal = document.querySelector('.add-note-modal');
const container = document.querySelector('.container');



/* NOTES */

let notes = JSON.parse(localStorage.getItem('notes')) || [];

const buttonAddNote = document.getElementById('addNote');

buttonAddNote.addEventListener('click', () => {
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    if(title.value.trim() && description.value.trim()) {
        pushNotes(title.value.trim(), description.value.trim());
        title.value = '';
        description.value = '';
    }
});

function pushNotes(title, description) {
    const data = new Date(Date.now());
    notes.push(
        {
            userId: userLoggedIn.id,
            title: title,
            description: description,
            creationDate: data.toLocaleDateString() + ' / ' + data.getHours() + ':' + data.getMinutes(),
        }
    );
    localStorage.setItem('notes', JSON.stringify(notes));
    modal.classList.remove('show-modal');
    container.classList.remove('lessOpacity');

    renderNotes();
}

/* RENDERING NOTES */

const notesContent = document.querySelector('.notes-inner-content');

function renderNotes() {
    notesContent.innerHTML = '';
    const userNotes = notes.filter((note) => note.userId === userLoggedIn.id);

    if(userNotes.length) {
        userNotes.forEach((note) => {
            appendNoteContent(note);
        });
        return;
    }

    const emptyNotesElement = document.createElement('div');
    emptyNotesElement.classList.add('emptyNotes');
    emptyNotesElement.innerHTML = `
        <img src="../images/no-image-icon-32.png" alt="" />
        <p>You don't have registered notes.</p>
    `;
    notesContent.appendChild(emptyNotesElement);

}

function appendNoteContent(note) {
    const titleElement = document.createElement('h4');
    const descriptionElement = document.createElement('p');
    const noteElement = document.createElement('div');
    const date_container = document.createElement('div');
    const deleteBox = document.createElement('div');

    const { title, description } = note;

    date_container.innerHTML = `
        <span>${note.creationDate}</span>
    `;

    deleteBox.innerHTML = `
        <i class="fas fa-trash-alt"></i>
    `;

    deleteBox.addEventListener('click', () => deleteNote(note));

    titleElement.textContent = title;
    descriptionElement.textContent = description;

    date_container.classList.add('date-container');
    noteElement.classList.add('note');
    deleteBox.classList.add('delete-box');

    noteElement.appendChild(titleElement);
    noteElement.appendChild(descriptionElement);
    noteElement.appendChild(date_container);
    noteElement.appendChild(deleteBox);
    notesContent.appendChild(noteElement);
}

function deleteNote(note) {
    notes = notes.filter(nt => nt !== note);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
}

function logout() {
    let user = JSON.parse(localStorage.getItem('userLoggedIn'));
    let users = JSON.parse(localStorage.getItem('users'));
    const userIndex = users.findIndex(usuario => usuario.id === user.id);
    user = {...user, status: 'Offline'};

    users[userIndex] = user;
    localStorage.setItem('users', JSON.stringify(users));

    localStorage.removeItem('userLoggedIn');
    document.location = 'http://127.0.0.1:5500/src/index.html';
}

renderNotes();
