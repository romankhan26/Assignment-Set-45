const magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];

function showMagicians(magicianNames: string[]): void {
    for (const name of magicianNames) {
        console.log(name);
    }
}
showMagicians(magicians);
