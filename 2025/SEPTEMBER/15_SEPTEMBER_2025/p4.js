// Multi-level Inheritance
class LivingBeing {
    breathe() {
        console.log("Breathing...");
    }
}

class Animal extends LivingBeing {
    eat() {
        console.log("Eating...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking...");
    }
}

const d = new Dog();
d.breathe();//Breathing...
d.eat();//Eating...
d.bark();//Barking...