// Generator yielding squares of numbers

function* squareGen(limit) {
    for (let i = 1; i <= limit; i++) {
        yield i * i;
    }
}

const gen = squareGen(5);
console.log(gen);//Object [Generator] {}

for (let val of gen) {
    console.log(val);
}