// call, apply, bind

//call() ==> Calls a function with a given "this" value and arguments passed individually.
function greet(greeting, punctuation) {
    console.log(greeting + " " + this.name + punctuation);
}

const user = { name: "Abhisek" };

greet.call(user, "Hello", "!");//Hello Abhisek!
