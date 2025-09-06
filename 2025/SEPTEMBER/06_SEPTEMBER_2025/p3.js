// Practice
// Write a curried function sum(a)(b)(c) that adds three numbers.
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(sum(2)(3)(4));//9
