const current_users:string[] = [
    "Ayub", "Aliya", "Sara", "Armeen", "Hafsa", "Roman" 
];
const new_users: string[] = [
    "ayub", "Sara", "Farhana", "armeen", "Arya", "Ameen"
];

for (const new_user of new_users) {
   const isExistingUser = current_users.some((user) =>user.toLowerCase() === new_user.toLowerCase());
   if (isExistingUser) {
    console.log(`Username "${new_user}" is taken. Please enter a new username.`)
   } else {
    console.log(`Username "${new_user}" is available.`)
   }
}