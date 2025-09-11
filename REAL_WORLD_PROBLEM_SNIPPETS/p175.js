// Prototype Chain Lookup
// NOTE==>
    // .prototype==>
            // Belongs to functions (constructors) like Array, Object, Function, etc.
            // It defines what the instances will inherit.
            // .prototype is where a constructor function stores properties/methods for its instances to inherit.
    // .__proto__==>
            // Belongs to objects (like arrays, strings, etc.).
            // It points to the prototype object it inherits from.
            // .__proto__ is the hidden link each object has, that points to the prototype it inherits from.

    // e.g.
    // function Car() {}
    // const myCar = new Car();
    
    // Car.prototype  // -> the object used as prototype for "all Car instances"
    
    // myCar.__proto__ // -> points to Car.prototype (specific object)




const arr = [1, 2, 3];
console.log(arr.__proto__);//Object(0) []
console.log(Array.prototype);//Object(0) []
console.log(arr.__proto__ === Array.prototype);//true
// NOTE==>
// -arr.__proto__ → How the array arr gets its built-in functions (like push, map, etc.).
// Array.prototype → The place where those built-in array functions are stored.


console.log(Array.prototype.__proto__);//[Object: null prototype] {}  (This is the prototype of Array.prototype — i.e., what Array.prototype itself inherits from.)
console.log(Object.prototype);//[Object: null prototype] {}
console.log(Array.prototype.__proto__ === Object.prototype);//true

console.log(Object.prototype.__proto__);//null
