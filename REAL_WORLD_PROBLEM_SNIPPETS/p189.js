// Bird with Fly Mixin
const canFly = {
    fly() {
        console.log(`${this.name} is flying!`);
    }
}

class Bird {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Bird.prototype, canFly);

const bird = new Bird("Eagle");
bird.fly();//Eagle is flying!