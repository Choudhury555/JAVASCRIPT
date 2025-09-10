// Overriding & Shadowing
// If an object has its own property, it shadows the prototype’s property.
function Person(name) {
    this.name = name
}

Person.prototype.sayHello = function () {
    console.log("FROM PROTOTYPE Hello, my name is " + this.name);
}

const p1 = new Person("Abhisek");

p1.sayHello = function () {
    console.log("FROM OBJECT'S OWN PROPERTY Hi, I'm " + this.name);
}

p1.sayHello();//FROM OBJECT'S OWN PROPERTY Hi, I'm Abhisek (If an object has its own property, it shadows the prototype’s property.)