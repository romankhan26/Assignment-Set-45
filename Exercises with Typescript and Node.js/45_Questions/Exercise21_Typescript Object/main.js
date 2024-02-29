var fruitBasket = {
    mango: 12,
    pineapple: 2,
    apple: 4,
    grapefruit: 3,
};
console.log("Fruit Basket:");
console.log("Mango: ".concat(fruitBasket.mango));
console.log("Pineapple: ".concat(fruitBasket.pineapple));
console.log("Apple: ".concat(fruitBasket.apple));
console.log("Grapefruit: ".concat(fruitBasket.grapefruit));
;
var books = [
    { title: "Jannat ke Pattay", author: "Nemrah Ahmed", year: 2013 },
    { title: "Basti", author: "Intizar Hussain", year: 1980 },
    { title: "Raja Gidh", author: "Bano Qudsia", year: 1988 }
];
var collectionName = "\n Book Collection:\n";
console.log("Name with Whitespace:");
console.log(collectionName);
books.forEach(function (book) {
    console.log("".concat(book.title, " by ").concat(book.author, " (").concat(book.year, ")"));
});
