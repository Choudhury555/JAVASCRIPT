// Partial application for reusable math
function multiply(a, b, c) {
    return a * b * c;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(3, 4));//24
console.log(triple(3, 4));//36