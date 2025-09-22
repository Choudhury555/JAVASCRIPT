// Duck with Both Fly & Swim
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

class Duck {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Duck.prototype, canFly, canSwim);

const duck = new Duck("Donald");
duck.fly();//Donald is flying!
duck.swim();//Donald is swimming!