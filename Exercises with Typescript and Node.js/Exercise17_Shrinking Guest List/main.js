var guests = ['Arman', 'Faiza', 'Hafsa', 'Roman', 'Ayub', 'Sara'];
console.log("I just found out that my dinner table won't arrive in time for the dinner and I have space only for two guests");
while (guests.length > 2) {
    var removedGuests = guests.pop();
    console.log("Dear ".concat(removedGuests, ", I am too sorry to inform you that I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
guests.length = 0;
console.log(guests);
