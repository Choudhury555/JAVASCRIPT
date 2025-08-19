// Well-Known Symbols (Built-in Hooks)
// JavaScript provides special Symbols to customize object behavior:
    // -Symbol.iterator → makes object iterable with for...of.
    // -Symbol.toPrimitive → controls type conversion.
    // -Symbol.toStringTag → customizes Object.prototype.toString.
    // Symbol.hasInstance → custom instanceof logic.


const myNumber = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}

console.log(myNumber);//{ [Symbol(Symbol.iterator)]: [GeneratorFunction: [Symbol.iterator]] }

for (let n of myNumber) {
    console.log(n);
}


// <==NOTE==>

// const obj1 = {
//     normalFunc() { return "Hi"; }  // normal named function
// };


// const obj2 = {
//     *[Symbol.iterator]() { yield 1; yield 2; } // special iterator function
// };


// normalFunc → just a regular method, you call with obj1.normalFunc().
// [Symbol.iterator] → special method, JS auto-uses it in for...of, spread ..., etc.      
