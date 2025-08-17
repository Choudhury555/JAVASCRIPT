// Passing Values into Generators

function* greet() {
    let name = yield "What is your name?";
    yield `Hello, ${name}`;
}

const g = greet();

console.log(greet);//[GeneratorFunction: greet]
console.log(g);//Object [Generator] {}

console.log(g.next());//{ value: 'What is your name?', done: false }
console.log(g.next("Abhisek"));//{ value: 'Hello, Abhisek', done: false }


//NOTE==>
// First next() just starts the generator and runs until the first yield. You can’t pass a value yet.
// The next call (g.next("Abhisek")) injects "Abhisek" into the paused yield expression, which gets stored in name.