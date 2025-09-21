// Function-Based Mixins
// Take a class → add some extra behavior → return a new class with both.
// It is Like HOC in React


// Take a class → add some extra behavior → return a new class with both.
const withJump = (Base) => {
    return class extends Base {
        jump() {
            console.log(`${this.name} is jumping!`);
        }
    }
}

class Creature {
    constructor(name) {
        this.name = name;
    }
}

class Frog extends withJump(Creature) {

}

const f = new Frog("Froggy");
f.jump();//Froggy is jumping!