// Custom iterator that counts 1 → 5
function createCounter(limit) {
    let count = 1;
    return {
        next: function () {
            return count <= limit ? { value: count++, done: false } : { value: undefined, done: true }
        }
    }
}

const counter = createCounter(5);
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: 4, done: false }
console.log(counter.next()); // { value: 5, done: false }
console.log(counter.next()); // { value: undefined, done: true }