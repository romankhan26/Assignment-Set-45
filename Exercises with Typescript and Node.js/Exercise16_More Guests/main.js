var guests = ['Hafsa', 'Sara', 'Ayub'];
console.log("We found a bigger dining table!");
guests.unshift('Roman');
guests.splice(guests.length / 2, 0, 'Dua');
guests.push('Aliya');
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, " you are cordially invited to dinner. Your presence means alot for us!"));
});
