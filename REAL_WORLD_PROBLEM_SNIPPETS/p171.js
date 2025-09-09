// Use pipe to square a number, then add 10, then double it.
const square = (n) => n * n;
const addTen = (n) => n + 10;
const double = (n) => n * 2;

function pipe(...fns) {
    return function temp(x) {
        return fns.reduce((acc, fn) => fn(acc), x);
    }
}

const processedNumber = pipe(square, addTen, double);
console.log(processedNumber(5));//((5*5)+10)*2 = 70
