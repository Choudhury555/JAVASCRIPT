// Losing this (detached function)
const person = {
    name: "Abhisek",
    sayName() {
        console.log(this.name);
    }
}

const fn = person.sayName;
fn();//undefined

// but below (direct function invocation will work)
person.sayName();//Abhisek