// Prototype Chain
function Person(name) {
    this.name = name
}

Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
}

const p1 = new Person("Abhisek");


console.log(p1.__proto__);//{ sayHello: [Function (anonymous)] }
console.log(Person.prototype);//{ sayHello: [Function (anonymous)] }
console.log(p1.__proto__===Person.prototype);//true


console.log(Person.prototype.__proto__);//[Object: null prototype] {}
console.log(Object.prototype);//[Object: null prototype] {}
console.log(Person.prototype.__proto__===Object.prototype);//true


console.log(Object.prototype.__proto__);//null
