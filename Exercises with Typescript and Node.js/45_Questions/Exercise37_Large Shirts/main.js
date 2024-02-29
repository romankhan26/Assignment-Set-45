"use strict";
class Shirt {
    constructor(size = "Large", message = "I love Typescript!") {
        this.size = size;
        this.message = message;
    }
    printSummary() {
        console.log(`Size: "${this.size}"`);
        console.log(`Message: "${this.message}"`);
    }
}
const largeShirt = new Shirt();
const mediumShirt = new Shirt("Medium");
const customShirt = new Shirt("Small", "Absolutely Not");
largeShirt.printSummary();
mediumShirt.printSummary();
customShirt.printSummary();
