// Shark with Swim Mixin
const canSwim = {
    swim() {
        console.log(`${this.name} is swimming!`);
    }
}

class Shark {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Shark.prototype, canSwim);

const shark = new Shark("Great Shark");
shark.swim();//Great Shark is swimming!