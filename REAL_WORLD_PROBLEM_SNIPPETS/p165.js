// Currying for customized filtering
const hasMinLength = (min) => (str) => str.length >= min;

const min3 = hasMinLength(3);
console.log(min3("Hi"));//false
console.log(min3("Hello"));//true
