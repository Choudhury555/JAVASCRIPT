// (2).Check if a user exists in a Map.
const userMap = new Map();
userMap.set("Abhisek", { age: 26 });
userMap.set("Gudu", { age: 25 });

console.log(userMap.has("Choudhury"));//false
console.log(userMap.has("Abhisek"));//true
console.log(userMap.has("gudu"));//false