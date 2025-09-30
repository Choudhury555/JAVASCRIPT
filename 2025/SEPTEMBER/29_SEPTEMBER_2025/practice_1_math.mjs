// Create a math.js with both default and named exports; import them in another file.

// Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export
export default function multiply(a, b) {
    return a * b;
}