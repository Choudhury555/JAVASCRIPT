//Practice
// Use call to borrow a method from one object to another.

const obj1 = {
    name: "Abhisek",
    greet() {
        console.log("Hi", this.name)
    }
};
const obj2 = { name: "Choudhury" };

obj1.greet.call(obj2);//Hi Choudhury