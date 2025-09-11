// Practice
// Demonstrate prototype chain lookup with toString.
const obj = { name: "Abhisek" };

console.log(obj.toString());//[object Object] (First call uses Object.prototype.toString (from prototype chain).)

obj.toString = function () {
    return `User: ${this.name}`;
}
console.log(obj.toString());//User: Abhisek (After overriding, lookup stops at obj itself.)

