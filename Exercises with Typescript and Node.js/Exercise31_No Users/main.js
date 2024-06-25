"use strict";
const usernames = [];
usernames.push("admin");
usernames.push("Eric");
usernames.push("Alice");
usernames.push("Bob");
usernames.push("Charlie");
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (const username of usernames) {
        if (username === "admin") {
            console.log(`Hello ${username}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
// Remove all of the usernames from your array, and make sure the correct message is printed.
const usernames2 = [];
if (usernames2.length === 0) {
    console.log("We need to find some users!");
}
