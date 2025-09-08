// Function Composition
// RIGHT TO LEFT
function compose(...fns) {
    console.log(fns);
    return function temp(x) {
        return fns.reduceRight((acc, fn) => fn(acc), x);//intitial value of "acc" is "x"
    }
}

const toUpper = (str) => str.toUpperCase();
const exclaim = (str) => str + "!";
const greet = (str) => "Hello " + str;

const excitedGreet = compose(toUpper, exclaim, greet);
console.log(excitedGreet("abhisek"));//HELLO ABHISEK! (greet->exclaim->toUpper) RIGHT TO LEFT