// What is a Mixin?
// A mixin is a reusable piece of code (object or function) that adds methods to a class.

// Allows multiple behaviors to be combined without strict inheritance.
const canFly = {
    fly() {
        console.log(`${this.name} is flying!`);
    }
}

const canSwim = {
    swim() {
        console.log(`${this.name} is swimming!`);
    }
}

class Animal {
    constructor(name) {
        this.name = name;
    }
}

//The Object. assign() method copies "properties" from one or more source objects to a target object.
Object.assign(Animal.prototype, canFly, canSwim);
console.log(Animal.prototype);//{ fly: [Function: fly], swim: [Function: swim] }  (Read more about Object.assign())

const duck = new Animal("Duck");
duck.fly();//Duck is flying!
duck.swim();//Duck is swimming!