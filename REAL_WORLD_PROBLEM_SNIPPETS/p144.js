// Custom iterator with Symbol.iterator
// Implement Symbol.iterator in an object that generates Fibonacci numbers.

const fibonacci = {
    *[Symbol.iterator]() {
        let a = 0, b = 1;
        for (let i = 0; i < 5; i++) {
            yield a;
            [a, b] = [b, a + b];
        }
    }
}

console.log(fibonacci);//{ [Symbol(Symbol.iterator)]: [GeneratorFunction: [Symbol.iterator]] }

for (let n of fibonacci) {
    console.log(n);// 0, 1, 1, 2, 3
}