// Partial Application
function multiply(a, b, c) {
    return a * b * c;
}

const doubleAndMultiply = multiply.bind(null, 2);
console.log(doubleAndMultiply(3, 4));//24