// Convert a sentence to kebab-case

function toKebabCase(str){
    return str.toLowerCase().trim().split(' ').join('-');
}

console.log(toKebabCase("  Learn JavaScript Deeply  ")); // Output: learn-javascript-deeply
console.log(toKebabCase("Master React Step By Step")); // Output: master-react-step-by-step