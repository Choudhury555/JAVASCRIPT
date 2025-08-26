// PRACTICE
// Show how deleting object references automatically clears WeakMap data
let userX = { name: "Abhisek" };

const lastLogin = new WeakMap();

lastLogin.set(userX, "2025-08-21");

console.log(lastLogin.get(userX));//2025-08-21

userX = null;//// object dereferenced (Now `lastLogin` entry is automatically cleared by GC)

console.log(lastLogin.get(userX));//undefined