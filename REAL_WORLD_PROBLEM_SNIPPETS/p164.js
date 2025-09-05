// Partial Application with bind
function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(5));//10
console.log(triple(5));//15