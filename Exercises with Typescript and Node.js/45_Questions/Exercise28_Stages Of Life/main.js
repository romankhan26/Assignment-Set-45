"use strict";
function determineLifeStage(age) {
    if (age < 2) {
        return "baby";
    }
    else if (age < 4) {
        return "toddler";
    }
    else if (age < 13) {
        return "kid";
    }
    else if (age < 20) {
        return "teenager";
    }
    else if (age < 65) {
        return "adult";
    }
    else {
        return "elder";
    }
}
const personAge1 = 1;
const lifeStage1 = determineLifeStage(personAge1);
console.log(`The person is a ${lifeStage1}.`);
const personAge2 = 3;
const lifeStage2 = determineLifeStage(personAge2);
console.log(`The person is a ${lifeStage2}.`);
const personAge3 = 10;
const lifeStage3 = determineLifeStage(personAge3);
console.log(`The person is a ${lifeStage3}.`);
const personAge4 = 16;
const lifeStage4 = determineLifeStage(personAge4);
console.log(`The person is a ${lifeStage4}.`);
const personAge5 = 30;
const lifeStage5 = determineLifeStage(personAge5);
console.log(`The person is an ${lifeStage5}.`);
const personAge = 66;
const lifeStage = determineLifeStage(personAge);
console.log(`The person is an ${lifeStage}.`);
