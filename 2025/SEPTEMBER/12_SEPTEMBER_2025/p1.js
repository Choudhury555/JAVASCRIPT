// Basic Class Syntax
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old`);
    }
}

const u1 = new User("Abhisek", 26);
u1.greet();//Hello, my name is Abhisek, and I am 26 years old