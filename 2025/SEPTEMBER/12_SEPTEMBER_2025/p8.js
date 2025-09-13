// Practice
// Show that class methods are actually stored on the prototype.
class User {
    greet() {
        return "Hello";
    }
}

const u = new User();
console.log(u.greet());//Hello
console.log(User.prototype.greet());//Hello
console.log(u.greet() === User.prototype.greet());//true