// Composition Model for Car
const canDrive = (state) => (
    {
        drive: () => console.log(`${state.name} can be driven`)
    }
)

const canHonk = (state) => (
    {
        honk: () => console.log(`${state.name} honks!`)
    }
)

function createCar(name) {
    const state = { name };
    return Object.assign(state, canDrive(state), canHonk(state));
}

const car = createCar("Mahindra");
console.log(car);//{ name: 'Mahindra', drive: [Function: drive], honk: [Function: honk] }
car.drive();//Mahindra can be driven
car.honk();//Mahindra honks!