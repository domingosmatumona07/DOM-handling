export function createUser(firstName, lastName, email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    users.push(
        {
            id: id_ && id_ || 2, 
            firstName,
            lastName,
            email,
            password,
            isAdmin: false,
            status: 'Offline',
        }
    );

    localStorage.setItem('users', JSON.stringify(users));
}

export function deleteUserById(users, userId) {
    const userTargetIndex = users.findIndex(user => user.id === Number(userId));
    users.splice(userTargetIndex, 1);
    localStorage.setItem('users', JSON.stringify(users));
    deleteAllUserData(users, userId, userTargetIndex);
}

function deleteAllUserData(users, userId, userTargetIndex) {
    const userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
    if(userLoggedIn === users[userTargetIndex]) localStorage.removeItem('userLoggedIn');

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.filter(note => note.userId !== Number(userId));
    localStorage.setItem('notes', JSON.stringify(notes));

    let trash = JSON.parse(localStorage.getItem('trash')) || [];
    trash = trash.filter(tsh => tsh.userId !== Number(userId));
    localStorage.setItem('trash', JSON.stringify(trash));
}

// export function updateUserById(users, id, datas) {
//     const index = userIndex(users, id);
//     users[index] = {...users[index], ...datas};
// }

// export function addAdmin(users, id) {
//     let user = users.find(user => user.id === id);
//     user = [...user, isAdmin = true];
// }

export function userIndex(users, id) {
    const index = users.findIndex(user => user.id === id);
    return index;
}