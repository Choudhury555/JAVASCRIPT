// Multi-Level Inheritance
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

const dog = new Dog();
dog.breathe();//Breathing...
dog.eat();//Eating...
dog.bark();//Barking...