//Arrow Functions
const add = (a,b) => {
    return a+b;
}

console.log(add(5,3));//8

//ONE LINER WITHOUT RETURN/CURLY BRACES
const square = x => x*x;
console.log(square(5));//25

//WITH MULTIPLE STATEMENTS
const justAnArraowFunction = (a,b) => {
    const sum = a+b;
    console.log(sum);
}

justAnArraowFunction(30,5);
