// Using super
// super calls the parent constructor.
// Also used to call parent methods.
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} is starting...`);
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    start() {
        super.start();
        console.log(`${this.model} is ready to go!`);
    }
}


const c = new Car("Tesla", "Model 3");
c.start();
//Tesla is starting...
//Model 3 is ready to go!