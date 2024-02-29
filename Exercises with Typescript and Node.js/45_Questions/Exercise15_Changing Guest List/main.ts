let invitees: string[] = ["Imran Khan", "Ayub Khan", "Zia Khan","Bilal Abbas"];

for (let invitee of invitees) {
    console.log(`Dear ${invitee}, I would like to invite you to dinner. It would be an honor to have you at my table.Looking forward to seeing you!`);
}    

let unavailableGuest: string = "Bilal Abbas";
console.log(`Unfortunately ${unavailableGuest} Can't make it to the dinner.`);

//Modifying the list
let newGuest: string = "Cihan Sikander"

let index = invitees.indexOf(unavailableGuest);
if (index !== -1) {
    invitees[index] = newGuest;
}

//Printing a Second Set of invitation
console.log("\nNew set of invitation messages:");
for (let invitee of invitees) {
    console.log(`Dear ${invitee}, I would like to invite you to dinner. It would be an honour to have you at my table. ~Looking forward to see you!`);
}