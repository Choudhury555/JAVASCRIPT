// Generators – A Shortcut to Create Iterators
// A generator function (function*) can pause and resume execution with yield.

function* numberGen() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGen();

console.log(gen);//Object [Generator] {}
console.log(gen.next());//{ value: 1, done: false }
console.log(gen.next());//{ value: 2, done: false }
console.log(gen.next());//{ value: 3, done: false }
console.log(gen.next());//{ value: undefined, done: true }
