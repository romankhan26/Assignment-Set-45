"use strict";
let personName = '';
personName = prompt('Please enter your name.') || '';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
    toLowerCase()).join();
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}.Here are your name in
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    TtleCase: ${titlecase}`);
}
else {
    alert('Please fill your name. It is required !');
}
