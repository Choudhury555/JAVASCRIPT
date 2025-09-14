// Getter/Setter for Age Validation
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
            throw new Error("Age cannot be negative");
        }
        this._age = value;
    }
}

const p1 = new Person("Abhisek", 26);
console.log(p1.age); // 26
p1.age = 27;
console.log(p1.age); // 27