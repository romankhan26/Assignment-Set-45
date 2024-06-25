"use strict";
const magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
showMagicians(magicians);
function showMagicians(magicianNames) {
    for (const name of magicianNames) {
        console.log(name);
    }
}
