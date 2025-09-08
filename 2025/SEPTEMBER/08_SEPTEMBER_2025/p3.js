// Pipe
// LEFT TO RIGHT
function pipe(...fns) {
    console.log(...fns);
    return function temp(x) {
        return fns.reduce((acc, fn) => fn(acc), x);////intitial value of "acc" is "x"
    }
}


const toUpper = (str) => str.toUpperCase();
const exclaim = (str) => str + "!";
const greet = (str) => "Hello " + str;

const excitedGreet = pipe(greet, exclaim, toUpper);
console.log(excitedGreet("abhisek"));////HELLO ABHISEK! (greet->exclaim->toUpper) LEFT TO RIGHT