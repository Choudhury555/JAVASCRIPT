// Practice
// Show that two objects from the same constructor share the same prototype.
function User(name) {
    this.name = name;
}

User.prototype.sayHi = function () {
    console.log("Hi, I'm " + this.name);
};

const u1 = new User("Abhisek");
const u2 = new User("Gudu");

console.log(u1.__proto__);//{ sayHi: [Function (anonymous)] }
console.log(u2.__proto__);//{ sayHi: [Function (anonymous)] }
console.log(User.prototype);//{ sayHi: [Function (anonymous)] }

console.log(u1.__proto__===u2.__proto__);//true


