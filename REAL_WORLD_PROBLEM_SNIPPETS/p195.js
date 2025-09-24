// Validating Salary with Getter/Setter
const employee = {};
let x = 0;

Object.defineProperty(employee, "salary", {
    get() {
        return x;
    },
    set(value) {
        if (value < 0) {
            throw new Error("Salary must be positive");
        }
        x = value;
    }
});

employee.salary = 250000;
console.log(employee.salary);//250000
employee.salary = -1;//Error: Salary must be positive
