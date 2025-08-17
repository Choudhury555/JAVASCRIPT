// Iterables (for…of support)
// Any object with [Symbol.iterator] is iterable.
//Built-in way to Create Iterator ==> myArray[Symbol.iterator]();

const arr = [1, 2, 3];
const it = arr[Symbol.iterator]();

console.log(it);//Object [Array Iterator] {}
console.log(it.next());//{ value: 1, done: false }
console.log(it.next());//{ value: 2, done: false }
console.log(it.next());//{ value: 3, done: false }
console.log(it.next());//{ value: undefined, done: true }