// Method Borrowing with call
const person1 = { name: "Abhisek" };
const person2 = { name: "Gudu" };

function introduce(role) {
    console.log(`Hi, I'm ${this.name} and my role is ${role}`);
}

introduce.call(person1, "Developer");//Hi, I'm Abhisek and my role is Developer
introduce.call(person2, "Tester");//Hi, I'm Gudu and my role is Tester