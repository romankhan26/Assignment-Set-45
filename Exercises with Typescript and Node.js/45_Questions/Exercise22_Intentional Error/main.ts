const groceryList:  string[] = [
    "Milk", "Eggs", "Vegetables", "Cheese", "Fruits"
];

//Change an index to produce an index error.
try {
    console.log(groceryList[5]);
} catch (error) {
    console.error(`Caught an error: ${error}.`);
}

//Correcting the error.
console.log(groceryList[4]);