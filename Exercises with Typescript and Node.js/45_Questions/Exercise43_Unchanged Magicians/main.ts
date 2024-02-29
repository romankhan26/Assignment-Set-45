function makeGreat(magicianNames: string[]): string[] {
    return magicianNames.map(name => `The Great ${name}`);
}

function showMagicians(magicianNames: string[]): void {
    for (const name of magicianNames) {
        console.log(name);
    }
}

const originalMagicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
const greatMagicians = makeGreat([...originalMagicians]);

showMagicians(originalMagicians);
showMagicians(greatMagicians);