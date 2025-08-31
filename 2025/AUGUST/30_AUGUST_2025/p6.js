// Explicit Binding: call, apply, bind
//NOTE: It’s the function that borrows this from the object

function greet(greeting) {
    console.log(greeting, this.name);
}

const user = { name: "Abhisek" };

greet.call(user, "Hello");//Hello Abhisek ("this" refers to user and greeting is "Hello";)
greet.apply(user, ["Hi"]);//Hi Abhisek
const boundFn = greet.bind(user, "Hey");
boundFn();//Hey Abhisek