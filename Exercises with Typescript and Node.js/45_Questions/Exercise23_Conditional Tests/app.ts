//Test evaluating answer "true" for the colors 
const color1: string = "red";
console.log(`Is the color of apple ${color1}? I predict true.`);
console.log(color1 === "red");

const color2: string = "purple";
console.log(`Is the color of the bag ${color2}? I predict true.`);
console.log(color2 === "purple");

const color3: string = "black";
console.log(`Is ${color3} darkest color and achromatic? I predict true.`);
console.log(color3 === "black");

const color4: string = "green";
console.log(`Is ${color4} the color of our national flag? I predict true.`);
console.log(color4 === "green");

const color5: string = "white";
console.log(`are clouds ${color5} in color? I predict true.`);
console.log(color5 === "white");

//Tests evaluating answer "false" on the scenario : Pakistan
let capital: string = "Lahore";
console.log(`Is the capital of Pakistan "${capital}"? I predict false.`);
console.log(capital === "Islamabad");

let officialLanguage: string = "English";
console.log(`Is the official language of Pakistan  "${officialLanguage}"? I predict false.`);
console.log(officialLanguage === "Urdu");

let highestPeak: string = "K2";
console.log(`Is the highest peak in Pakistan "${highestPeak}"? I predict false.`);
console.log(highestPeak === "Nanga Parbat");

let nationalSport: string = "Cricket";
console.log(`Is the national sport of Pakistan "${nationalSport}"? I predict false.`);
console.log(nationalSport === "Hockey");

let currency: string = "Dollar";
console.log(`Is the currency of Pakistan "${currency}"? I predict false.`);
console.log(currency === "Pakistani Rupee");