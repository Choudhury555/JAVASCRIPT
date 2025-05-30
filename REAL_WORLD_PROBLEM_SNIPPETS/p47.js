// Inherit methods from a parent constructor
function Vehicle(type){
    this.type=type;
}

Vehicle.prototype.description = function(){
    return `This is a ${this.type}`;
}

function Bike(brand){
    Vehicle.call(this,"Bike");
    this.brand=brand;
}

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

const myBike = new Bike("Hunter");
console.log(myBike.description());//This is a Bike