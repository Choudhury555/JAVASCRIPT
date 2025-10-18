// Validate If a String Starts with a Capital Letter
function startsWithCapital(str) {
    return /^[A-Z]/.test(str);
}

console.log(startsWithCapital("Hello world"));//true
console.log(startsWithCapital("hello world"));//false