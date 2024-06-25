//For Green Alien
//
//
function calculatePoints1(alienColor: string): number {
    if (alienColor === "green") {
        return 5;
    } else {
        return 0;
    }
}

const greenAlienColor = "green";
const pointsForGreenColor = calculatePoints1(greenAlienColor);
console.log(`Player earned ${pointsForGreenColor} points for a green alien.`);
//
//
//For Yellow Color
//
//
function calculatePoints2(alienColor: string): number {
    if (alienColor === "yellow") {
        return 10;
    } else {
        return 0;
    }
}

const yellowAlienColor = "yellow";
const pointsForYellowAlien = calculatePoints2(yellowAlienColor);
console.log(`Player earned ${pointsForYellowAlien} points for a yellow alien.`);
//
//
//For Red Alien
//
//
function calculatePoints3(alienColor: string): number {
    if (alienColor === "red") {
        return 15;
    } else {
        return 0;
    }
}

const redAlienColor = "red";
const pointsForRedColor = calculatePoints3(redAlienColor);
console.log(`Player earned ${pointsForRedColor} points for a red alien.`);