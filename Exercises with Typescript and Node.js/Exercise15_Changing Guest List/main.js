var invitees = ["Imran Khan", "Ayub Khan", "Zia Khan", "Bilal Abbas"];
for (var _i = 0, invitees_1 = invitees; _i < invitees_1.length; _i++) {
    var invitee = invitees_1[_i];
    console.log("Dear ".concat(invitee, ", I would like to invite you to dinner. It would be an honor to have you at my table.Looking forward to seeing you!"));
}
var unavailableGuest = "Bilal Abbas";
console.log("Unfortunately ".concat(unavailableGuest, " Can't make it to the dinner."));
//Modifying the list
var newGuest = "Cihan Sikander";
var index = invitees.indexOf(unavailableGuest);
if (index !== -1) {
    invitees[index] = newGuest;
}
//Printing a Second Set of invitation
console.log("\nNew set of invitation messages:");
for (var _a = 0, invitees_2 = invitees; _a < invitees_2.length; _a++) {
    var invitee = invitees_2[_a];
    console.log("Dear ".concat(invitee, ", I would like to invite you to dinner. It would be an honour to have you at my table. ~Looking forward to see you!"));
}
