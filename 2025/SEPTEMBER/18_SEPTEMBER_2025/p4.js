// Combining Private & Static
class Counter {
    static #count = 0;

    static increment() {
        Counter.#count++;
        return Counter.#count;
    }
}

console.log(Counter.increment());//1
console.log(Counter.increment());//2