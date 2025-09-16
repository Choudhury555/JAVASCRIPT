// Practice
// Show a multi-level inheritance example.
class LivingBeing {
    breathe() {
        return "Breathing...";
    }
}

class Human extends LivingBeing {
    speak() {
        return "Speaking...";
    }
}

class Developer extends Human {
    code() {
        return "Coding..."
    }
}

const dev = new Developer();
console.log(dev.breathe());//Breathing...
console.log(dev.speak());//Speaking...
console.log(dev.code());//Coding...
