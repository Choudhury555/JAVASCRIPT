// Static Private Counter for Instances
class Employee {
    static #count = 0;

    constructor(name) {
        this.name = name;
        Employee.#count++;
    }

    static getCount() {
        return `Total Employees: ${Employee.#count}`;
    }
}

const e1 = new Employee("Abhisek");
const e2 = new Employee("Gudu");

console.log(Employee.getCount());//Total Employees: 2