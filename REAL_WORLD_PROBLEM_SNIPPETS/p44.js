// Borrow method using call()
const user1 = { name: "Abhi" };
const user2 = { name: "Mike" };

function greet(){
    return `Hello ${this.name}`;
}

console.log(greet.call(user1));//Hello Abhi
console.log(greet.call(user2));//Hello Mike

//user1 and user2 are borrowing the greet function.