//PRACTICE ABOVE 4 files concepts
// 1.
function Car(brand){
    this.brand=brand;
}

Car.prototype.start = function(){
    return `${this.brand} can start`;
}

const carObj1 = new Car("BMW");

console.log(carObj1.__proto__);//{ start: [Function (anonymous)] }
console.log(carObj1.start());//BMW can start


// 2.
function ElectricCar(brand){
    Car.call(this,brand);
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor=ElectricCar;

const eCarObj = new ElectricCar("Tesla");
console.log(eCarObj.start());//Tesla can start


// 3.
const parent = {
    greet(){
        return "Hello from Parent";
    }
}

const child = Object.create(parent);
console.log(child.greet());//Hello from Parent


// 4.
console.log(__proto__);//{}