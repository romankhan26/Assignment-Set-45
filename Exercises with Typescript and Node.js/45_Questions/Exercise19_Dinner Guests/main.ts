let guests: string[] = ['Arman', 'Faiza', 'Hafsa', 'Roman', 'Ayub', 'Sara'];
/*
console.log(`I just found out that my dinner table won't arrive in time for the dinner and I have space only for two guests`);

while (guests.length > 2) {
    let removedGuests = guests.pop();
    console.log(`Dear ${removedGuests}, I am too sorry to inform you that I can't invite you to dinner.`);
}


guests.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});*/


guests.length = 2;
console.log(guests);

console.log(`Number of guests: ${guests.length}`)