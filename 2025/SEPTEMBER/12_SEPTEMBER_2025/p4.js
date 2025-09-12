// Getter & Setter
// Control how properties are accessed or modified.
class Employee {
    constructor(name, salary) {
        this.name = name;
        this._salary = salary;//No, the underscore (_) is not mandatory in JavaScript. It's just a convention to indicate that a property is intended to be private or internal to the class.
    }

    get salary() {
        return `₹${this._salary}`;
    }

    set salary(amount) {
        if (amount < 0) {
            throw new Error("Invalid Salary");
        }
        this._salary = amount;
    }
}

const emp = new Employee("Abhisek", 200000);
console.log(emp.salary);//200000
emp.salary = 250000;
console.log(emp.salary);//250000
