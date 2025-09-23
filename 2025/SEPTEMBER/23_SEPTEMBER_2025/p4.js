// Using Getters/Setters with defineProperty
const person = {};
let x = 25;

Object.defineProperty(person, "age", {
    get() {
        return x;
    },
    set(value) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        x = value;
    }
});

console.log(person.age);//25
person.age = 26;
console.log(person.age);//26