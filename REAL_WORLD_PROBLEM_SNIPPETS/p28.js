// Track user login status using Map
const userLogins = new Map();
userLogins.set("Abhisek",true);
userLogins.set("Choudhury",false);

console.log(userLogins.get("Abhisek"));//true
console.log(userLogins.get("Choudhury"));//false
console.log(userLogins.has("Mike"));//false