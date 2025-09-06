// Practice
// Create a partially applied function that always multiplies numbers by 10.
function multiply(a, b) {
    return a * b;
}

const multiplyBy10 = multiply.bind(null, 10);
console.log(multiplyBy10(5));//50
