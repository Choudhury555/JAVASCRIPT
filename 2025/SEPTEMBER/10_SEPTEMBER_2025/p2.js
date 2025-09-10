// Function Prototypes
//Older way of create Class before ES6
function Person(name) {
    this.name = name
}

Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
}

const p1 = new Person("Abhisek");
p1.sayHello();//Hello, my name is Abhisek