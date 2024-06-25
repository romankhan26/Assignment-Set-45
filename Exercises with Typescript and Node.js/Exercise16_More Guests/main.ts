let guests: string[] = ['Hafsa', 'Sara', 'Ayub'];

console.log("We found a bigger dining table!");

guests.unshift('Roman');
guests.splice(guests.length / 2, 0 ,'Dua');
guests.push('Aliya');

guests.forEach(guest => {
    console.log(`Dear ${guest} you are cordially invited to dinner. Your presence means alot for us!`)
});