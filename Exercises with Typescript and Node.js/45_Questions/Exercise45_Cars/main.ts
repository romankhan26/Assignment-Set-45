class Car {
    private manufacturer: string;
    private model: string;
    private additionalInfo: Record<string, any>;

    constructor(manufacturer: string, model: string, additionalInfo: Record<string, any>) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.additionalInfo = additionalInfo;
    }

    getInfo(): string {
        return `Manufacturer: ${this.manufacturer}, Model: ${this.model}, Additional Info: ${JSON.stringify(this.additionalInfo)}`;
    }
}

const myCar = new Car("Ford", "Mustang", { color: "Black", features: ["GPS", "Sunroof"] });

//Print the stored information
console.log(myCar.getInfo());