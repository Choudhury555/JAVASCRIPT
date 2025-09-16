// Practice
// Create a base Employee class and extend it with Manager and Developer.
class Employee {
    constructor(name) {
        this.name = name;
    }

    work() {
        return `${this.name} is working.`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} is managing the team.`;
    }
}

class Developer extends Employee {
    work() {
        return `${this.name} is writing code.`;
    }
}

console.log(new Manager("Abhisek").work());//Abhisek is managing the team.
console.log(new Developer("Shinu").work());//Shinu is writing code.
