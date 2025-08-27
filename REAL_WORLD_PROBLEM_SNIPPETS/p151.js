// WeakSet to track active users
const activeUsers = new WeakSet();

let user1 = { name: "Abhisek" };
let user2 = { name: "Gudu" };

activeUsers.add(user1);
activeUsers.add(user2);

console.log(activeUsers.has(user1));//true

user1 = null;// garbage collected → auto removed from WeakSet

console.log(activeUsers.has(user1));//false
console.log(activeUsers.has(user2));//true

