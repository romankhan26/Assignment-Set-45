const magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
const greatMagicians = makeGreat(magicians);
showMagicians(greatMagicians);


function makeGreat(magicianNames: string[]): string[] {
    return magicianNames.map(name => `The Great ${name}`);
}

function showMagicians(magicianNames: string[]): void {
    for (const name of magicianNames) {
        console.log(name);
    }
}