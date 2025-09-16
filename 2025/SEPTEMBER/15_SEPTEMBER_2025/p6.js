// Practice
// Override a parent method using polymorphism.
class Animal {
    speak() {
        return "Some Sound...";
    }
}

class Dog extends Animal {
    speak() {
        return "Bark...";
    }
}

console.log(new Dog().speak());//Bark...
