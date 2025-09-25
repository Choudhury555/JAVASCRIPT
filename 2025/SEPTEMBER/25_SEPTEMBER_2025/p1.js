// Reflect.get(target, property)
const user = { name: "Abhisek", age: 26 };
console.log(Reflect.get(user, "age"));//26


// Reflect.set(target, property, value)
Reflect.set(user, "newProperty", "newValue");
console.log(user);//{ name: 'Abhisek', age: 26, newProperty: 'newValue' }


// Reflect.has(target, property) (like in)
console.log(Reflect.has(user, "name"));//true
console.log("name" in user);//true


// Reflect.deleteProperty(target, property)
Reflect.deleteProperty(user, "age");
console.log(user);//{ name: 'Abhisek', newProperty: 'newValue' }


// Reflect.ownKeys(target) (like Object.keys + symbols)
const obj = { x: 10, y: 20 };
const sym = Symbol("id");
obj[sym] = 123;

console.log(Reflect.ownKeys(obj));//[ 'x', 'y', Symbol(id) ]
console.log(Object.keys(obj));//[ 'x', 'y' ]
//NOTE==>Unlike Object.keys(), which only retrieves string keys, Reflect.ownKeys() returns both(String keys (e.g., "x", "y") and Symbol keys (e.g. Symbol(id)))


// Reflect.defineProperty(target, property, descriptor)
const car = {};
Reflect.defineProperty(car, "brand", {
    value: "Tesla",
    writable: false
});

console.log(car.brand);//Tesla


// Reflect.getOwnPropertyDescriptor(target, property)
console.log(Reflect.getOwnPropertyDescriptor(car, "brand"));//{ value: 'Tesla', writable: false, enumerable: false, configurable: false }


// Reflect.apply(func, thisArg, argsArray)
function greet(msg) {
    return `${msg}, ${this.name}`;
}

const person = { name: "Abhisek" };

console.log(Reflect.apply(greet, person, ["Hello"]));//Hello, Abhisek