// Employee Base Class with Inheritance
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        return `${this.name} earns ₹${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary, language) {
        super(name, salary);
        this.language = language;
    }

    getDetails() {
        return `${super.getDetails()} and codes in ${this.language}`
    }
}

const dev = new Developer("Abhisek", 2200000, "JavaScript");
console.log(dev.getDetails());//Abhisek earns ₹2200000 and codes in JavaScript