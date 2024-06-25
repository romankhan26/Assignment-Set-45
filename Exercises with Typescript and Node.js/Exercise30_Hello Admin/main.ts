const user_names: string[] = ["Admin", "Sara", "Roman", "Hafsa", "Dua" ];
for (const user_name of user_names) { 
    if (user_name == "Admin") {
        console.log(`Hello ${user_name}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${user_name}, thank you for logging in again`);
    }
    
}