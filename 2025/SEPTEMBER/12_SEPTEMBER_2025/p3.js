// Adding Methods

// Instance methods → available on all objects.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {// Instance methods → available on all objects.
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old`);
    }
}

const u1 = new User("Abhisek", 26);
u1.greet();//Hello, my name is Abhisek, and I am 26 years old


// e.g(2):==>
// Static methods → belong to the class itself.
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

const m = new MathUtil();
//console.log(m.add(10,15));//❌ TypeError: m.add is not a function (Not allowed: called static method on an instance.)
console.log(MathUtil.add(10, 15));//25 (✅ Static methods can be accessed directly via the class: ClassName.method().)
