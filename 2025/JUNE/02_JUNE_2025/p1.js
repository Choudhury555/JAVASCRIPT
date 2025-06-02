//CLASS
// A class is a blue print for creating objects with shared structure and behavior
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
        return `Hi I am ${this.name} and I am ${this.age} years old`;
    }
}

class Employee extends Person{
    constructor(name,age,role){
        super(name,age);
        this.role=role;
    }

    describeJob(){
        return `${this.name} works as a ${this.role}`;
    }
}

const abhi = new Person("Abhisek",25);
console.log(abhi.greet());

const emp = new Employee("Shinu",21,"Developer");
console.log(emp.describeJob());
