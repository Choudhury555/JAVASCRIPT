// Global Symbol Registry
// Symbol.for(key) → reuses the same symbol if it exists.

const x = Symbol.for("id");// Looks in global symbol registry: "id" not found → creates it.
const y = Symbol.for("id");// Looks in global symbol registry: "id" found → reuses it.

console.log(x == y);//true


// NOTE
const a = Symbol("id");// Creates a brand new symbol with description "id"
const b = Symbol("id");// Creates another brand new symbol with description "id"

console.log(a === b); // false (because each call makes a unique symbol)