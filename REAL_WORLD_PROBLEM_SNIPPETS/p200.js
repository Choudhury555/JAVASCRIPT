// Applying Functions with Custom Context
function greet(msg) {
    return `${msg}, ${this.name}!`;
}

const person = { name: "Abhisek" };

const message = Reflect.apply(greet, person, ["Good Morning"]);
console.log(message);//Good Morning, Abhisek!