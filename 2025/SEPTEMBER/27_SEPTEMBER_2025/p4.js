// Validating Object Keys (has)
const product = { id: 101, price: 500 };

const proxy = new Proxy(product, {
    has(obj, prop) {
        return prop == "id";//// Only expose "id"
    }
})


console.log("id" in proxy);//true
console.log("price" in proxy);//false


// The has handler only controls the behavior of the "in" operator (checking if a property exists). It doesn't hide or alter the actual structure of the object when logged.
console.log(proxy);//{ id: 101, price: 500 }