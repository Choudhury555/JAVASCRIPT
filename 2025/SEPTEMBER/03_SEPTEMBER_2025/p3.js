// bind()==> Returns a new function with this permanently bound. (Doesn’t invoke immediately.)
function greet(greeting, punctuation) {
    console.log(greeting + " " + this.name + punctuation);
}

const user = { name: "Abhisek" };

const sayHello = greet.bind(user, "Hey");
sayHello("?");//Hey Abhisek?