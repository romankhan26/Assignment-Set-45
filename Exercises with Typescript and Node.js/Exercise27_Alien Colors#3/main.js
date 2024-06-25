//For Green Alien
//
//
function calculatePoints1(alienColor) {
    if (alienColor === "green") {
        return 5;
    }
    else {
        return 0;
    }
}
var greenAlienColor = "green";
var pointsForGreenColor = calculatePoints1(greenAlienColor);
console.log("Player earned ".concat(pointsForGreenColor, " points for a green alien."));
//
//
//For Yellow Color
//
//
function calculatePoints2(alienColor) {
    if (alienColor === "yellow") {
        return 10;
    }
    else {
        return 0;
    }
}
var yellowAlienColor = "yellow";
var pointsForYellowAlien = calculatePoints2(yellowAlienColor);
console.log("Player earned ".concat(pointsForYellowAlien, " points for a yellow alien."));
//
//
//For Red Alien
//
//
function calculatePoints3(alienColor) {
    if (alienColor === "red") {
        return 15;
    }
    else {
        return 0;
    }
}
var redAlienColor = "red";
var pointsForRedColor = calculatePoints3(redAlienColor);
console.log("Player earned ".concat(pointsForRedColor, " points for a red alien."));
