// Manual Iterator

function createIterator(arr) {
    let i = 0;
    return {
        next: function () {
            return i < arr.length ? { value: arr[i++], doe: false } : { value: undefined, done: true };
        }
    }
}

const it = createIterator([10, 20, 30]);
// console.log(it);
console.log(it.next());//{ value: 10, doe: false }
console.log(it.next());//{ value: 20, doe: false }
console.log(it.next());//{ value: 30, doe: false }
console.log(it.next());//{ value: undefined, done: true }