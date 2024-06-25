var groceryList = [
    "Milk", "Eggs", "Vegetables", "Cheese", "Fruits"
];
//Change an index to produce an index error.
try {
    console.log(groceryList[5]);
}
catch (error) {
    console.error("Caught an error: ".concat(error, "."));
}
// console.log(groceryList[5]);
//Correcting the error.
console.log(groceryList[4]);
