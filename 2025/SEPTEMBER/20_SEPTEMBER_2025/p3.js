// composition over inheritance — a design principle where you build objects by combining simple, reusable behaviors instead of using class inheritance.
// Instead of deep inheritance, compose small behaviors.
const canEat = (state) => (
    {
        eat: () => {
            console.log(`${state.name} is eating`);
        }
    }
)

const canWalk = (state) => (
    {
        walk: () => {
            console.log(`${state.name} is walking`);
        }
    }
)

function createPerson(name) {
    const state = { name };
    console.log(state);//{ name: 'Abhisek' }
    return Object.assign(state, canEat(state), canWalk(state));//The Object. assign() method copies "properties" from one or more source objects to a target object. (canEat(state)/canWalk(state) will return an Object)
    // console.log(state);//{ name: 'Abhisek', eat: [Function: eat], walk: [Function: walk] }
}

const p1 = createPerson("Abhisek");
p1.eat();//Abhisek is eating
p1.walk();//Abhisek is walking