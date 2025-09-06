// Practice
// Convert a normal function into a curried version.

//Normal Function
function add(a, b) {
    return a + b;
}

function curriedAdd(a) {
    return function (b) {
        return a + b;
    }
}

console.log(add(7, 8));//15
console.log(curriedAdd(21)(5));//26

