// Manager Class Extending Employee
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        return `${this.name} earns ₹${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name, salary, teamSize) {
        super(name, salary);
        this.teamSize = teamSize;
    }
    getDetails() {
        return `${this.name} manages a team of ${this.teamSize} members.`;
    }
}

const mgr = new Manager("Raghuveer", "10000000", 22);
console.log(mgr.getDetails());//Raghuveer manages a team of 22 members.
