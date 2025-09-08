// Point-Free Style
// Point-Free Style (also known as tacit programming) is a functional programming style where functions are defined without explicitly mentioning their arguments (the "points").
// Point-Free is just a style of writing functions — not a separate feature or tool.

// NOTE==>Point-free style often uses pipe or compose to eliminate explicit parameters

const double = (x) => x * 2;
const increment = (x) => x + 1;

// Normal Style
const doubleThenInc = (x) => increment(double(x));
console.log(doubleThenInc(5));//11

// Point-Free Style
// function pipe(...fns) {
//     return function temp(x) {
//         return fns.reduce((acc, fn) => fn(acc), x);
//     }
// }

//Arrow method way to write pipe(same as above "pipe" method)
const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

const doubleThenIncPointFree = pipe(double, increment);
console.log(doubleThenIncPointFree);//[Function: temp] ==> for above normal pipe function it is temp and for arrow it is [Function (anonymous)]
console.log(doubleThenIncPointFree(5));//11


