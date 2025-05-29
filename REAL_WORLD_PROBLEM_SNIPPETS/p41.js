// Object method using this
const person = {
    name:"Abhisek",
    greet(){
        return `Hello, my name is ${this.name}`;
    }
}

console.log(person.greet()); // "Hello, my name is Abhisek"