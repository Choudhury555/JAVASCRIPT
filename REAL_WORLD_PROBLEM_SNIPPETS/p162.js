// Using apply with Math.max
const numbers = [10, 20, 5, 40, 15];
console.log(Math.max.apply(null, numbers));//40

//Modern Alternative
console.log(Math.max(...numbers));//40 (Preferred in ES6+)