// Methods Stored on Prototype
class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

const u1 = new User("Abhisek");
console.log(u1.greet()); // Hello, I'm Abhisek

console.log(Object.getPrototypeOf(u1).hasOwnProperty("greet"));// true → method lives on prototype, not copied to each object
