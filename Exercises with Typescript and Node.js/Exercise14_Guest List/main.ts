import { log } from "console";

let invitees: string[] = ["Imran Khan", "Ayub Khan", "Zia Khan","Bilal Abbas"];

for (let invitee of invitees) {
    console.log(`Dear ${invitee}, I would like to invite you to dinner. It would be an honor to have you at my table.Looking forward to seeing you!`);
}    

invitees.forEach(invitee => {
    console.log(`Dear ${invitee}, You are cordially invited to the `);
    
});