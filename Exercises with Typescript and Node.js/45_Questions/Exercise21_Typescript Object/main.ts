const fruitBasket = {
    mango: 12,
    pineapple: 2,
    apple: 4,
    grapefruit: 3,
};

console.log("Fruit Basket:");
console.log(`Mango: ${fruitBasket.mango}`);
console.log(`Pineapple: ${fruitBasket.pineapple}`);
console.log(`Apple: ${fruitBasket.apple}`);
console.log(`Grapefruit: ${fruitBasket.grapefruit}`);


//Book Collection
interface Book {
    title: string;
    author: string;
    year: number;
};
const books: Book[] = [
    { title: "Jannat ke Pattay", author: "Nemrah Ahmed", year: 2013},
    { title: "Basti", author: "Intizar Hussain", year: 1980},
    { title: "Raja Gidh", author: "Bano Qudsia", year: 1988}
];
const collectionName = "\n Book Collection:\n";
console.log("Name with Whitespace:");
console.log(collectionName);

books.forEach((book) => {
    console.log(`${book.title} by ${book.author} (${book.year})`);
});