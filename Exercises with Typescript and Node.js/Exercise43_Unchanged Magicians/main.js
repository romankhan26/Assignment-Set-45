"use strict";
function makeGreat(magicianNames) {
    return magicianNames.map(name => `The Great ${name}`);
}
function showMagicians(magicianNames) {
    for (const name of magicianNames) {
        console.log(name);
    }
}
const originalMagicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
const greatMagicians = makeGreat([...originalMagicians]);
showMagicians(originalMagicians);
showMagicians(greatMagicians);
