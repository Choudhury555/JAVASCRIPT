// Overriding Prototype Method (Shadowing)
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log("FROM PROTOTYPE Hello, my name is " + this.name);
}

const p1 = new Person("Abhisek");
p1.greet();//FROM PROTOTYPE Hello, my name is Abhisek

// Override greet for this instance only (p1)
p1.greet = function () {
    console.log("FROM OBJECT'S OWN PROPERTY Hi, I'm " + this.name);
}

p1.greet();//FROM OBJECT'S OWN PROPERTY Hi, I'm Abhisek