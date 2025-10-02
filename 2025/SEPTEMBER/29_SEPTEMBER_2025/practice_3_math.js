// Use import() to dynamically load a module only when needed.
// Named export
function add(a, b) {
    return a + b;
}

// Another named export
function multiply(a, b) {
    return a * b;
}

module.exports = { add, multiply };