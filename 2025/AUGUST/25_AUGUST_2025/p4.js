//PRACTICE
// Use a WeakSet to track online users
const onlineUsers = new WeakSet();

let userA = { is: 1 };
let userB = { is: 2 };

onlineUsers.add(userA);
onlineUsers.add(userB);

console.log(onlineUsers.has(userA));//true
console.log(onlineUsers.has(userB));//true