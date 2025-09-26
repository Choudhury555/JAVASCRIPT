// Checking Property Existence
const product = { id: 101, price: 500 };

console.log(Reflect.has(product, "id"));//true
console.log(Reflect.has(product, "discount"));//false