// Read-Only Properties
const product = {};
Object.defineProperty(product, "price", {
    value: 100,
    writable: false
});

console.log(product.price);//100
product.price = 500;// ❌ ignored (writable: false)
console.log(product.price);//100