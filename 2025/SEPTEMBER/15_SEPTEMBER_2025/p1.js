// Inheritance, super, Polymorphism
// Inheritance with extends
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks`);
    }
}

const d = new Dog("Katara");
d.speak();//Katara makes a noise
d.bark();//Katara barks