// Practice
// Create a class with a getter/setter for age (with validation).
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw new Error("Age must be positive!");
        }
        this._age = value;
    }
}


const p = new Person("Abhisek", 22);
console.log(p.age);//22
p._age = 26;
console.log(p.age);//26
