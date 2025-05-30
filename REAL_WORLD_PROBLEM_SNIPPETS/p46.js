// Create a constructor function with shared methods
function User(name){
    this.name=name;
}

User.prototype.sayHello = function(){
    return `Hello ${this.name}`;
}

const user1 = new User("Abhisek");
console.log(user1.sayHello());//Hello Abhisek