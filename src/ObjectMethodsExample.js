let car = {
    brand: "Toyota",
    model: "Corolla",
    start() {
        console.log(`The ${this.brand} ${this.model} is starting.`);
    }
};

car.start();
