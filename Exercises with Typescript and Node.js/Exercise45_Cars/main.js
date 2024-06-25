"use strict";
class Car {
    constructor(manufacturer, model, additionalInfo) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.additionalInfo = additionalInfo;
    }
    getInfo() {
        return `Manufacturer: ${this.manufacturer}, Model: ${this.model}, Additional Info: ${JSON.stringify(this.additionalInfo)}`;
    }
}
const myCar = new Car("Ford", "Mustang", { color: "Black", features: ["GPS", "Sunroof"] });
//Print the stored information
console.log(myCar.getInfo());
