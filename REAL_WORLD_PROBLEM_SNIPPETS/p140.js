// Iterate over a generator using for...of
// Generator with for...of iteration

function* colors() {
    yield "Blue";
    yield "Black";
    yield "Red";
}

for (let c of colors()) {
    console.log(c);
}