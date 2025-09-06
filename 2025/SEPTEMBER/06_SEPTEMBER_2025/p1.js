// Currying
// Normal function
function add(a, b, c) {
    return a + b + c;
}

//Curried Function
function curriedAdd(a) {
    return function b_func(b) {
        return function c_func(c) {
            return a + b + c;
        }
    }
}

console.log(curriedAdd(2));//[Function: b_func]
console.log(curriedAdd(2)(3));//[Function: c_func]
console.log(curriedAdd(2)(3)(4)); // 9