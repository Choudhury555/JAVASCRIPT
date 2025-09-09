// Create a compose function to transform "abhisek" into "HELLO ABHISEK!!!".

function compose(...fns) {
    return function temp(x) {
        return fns.reduceRight((acc, fn) => fn(acc), x);
    }
}


const toUpper = (str) => str.toUpperCase();
const addExclamations = (str) => str + "!!!";
const greet = (str) => "Hello " + str;

const finalMessage = compose(addExclamations, toUpper, greet);
console.log(finalMessage("abhisek"));//HELLO ABHISEK!!!
