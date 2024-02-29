const magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
showMagicians(magicians);

function showMagicians(magicianNames: string[]): void {
    for (const name of magicianNames) {
        console.log(name);
    }
}
