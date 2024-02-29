"use strict";
const current_users = [
    "Ayub", "Aliya", "Sara", "Armeen", "Hafsa", "Roman"
];
const new_users = [
    "ayub", "Sara", "Farhana", "armeen", "Arya", "Ameen"
];
for (const new_user of new_users) {
    const isExistingUser = current_users.some((user) => user.toLowerCase() === new_user.toLowerCase());
    if (isExistingUser) {
        console.log(`Username "${new_user}" is taken. Please enter a new username.`);
    }
    else {
        console.log(`Username "${new_user}" is available.`);
    }
}
