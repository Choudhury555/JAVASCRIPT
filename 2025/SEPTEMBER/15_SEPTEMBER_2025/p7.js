// Practice
// Use super to call parent class methods in a child class.
class Employee {
    constructor(name) {
        this.name = name;
    }

    info() {
        return `Employee: ${this.name}`;
    }
}

class Manager extends Employee {
    info() {
        return super.info() + " (Manager)";
    }
}

console.log(new Manager("Abhisek").info());//Employee: Abhisek (Manager)
