// PRACTICE
// Create a WeakMap to store user → last login time

const weakMap = new WeakMap();

let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

weakMap.set(user1, "2025-08-26 10:00");
weakMap.set(user2, "2025-08-26 10:00");

console.log(weakMap.get(user1));//2025-08-26 10:00
console.log(weakMap.get(user2));//2025-08-26 10:00