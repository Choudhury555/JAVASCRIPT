// Constructor with Prototype Method
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    return `${this.brand} ${this.model}`;
}

const car1 = new Car("Mahindra", "BE6");
console.log(car1.getDetails());//Mahindra BE6
