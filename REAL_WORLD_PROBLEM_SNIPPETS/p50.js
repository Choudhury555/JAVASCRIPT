// Inherit from a base class
class User{
    constructor(name){
        this.name=name;
    }

    greet(){
        return `Hi, I'm ${this.name}`;
    }
}


class Admin extends User{
    constructor(name,role){
        super(name);
        this.role=role;
    }

    accessLevel(){
        return `${this.name} has ${this.role} access`;
    }
}


const admin = new Admin("Abhisek", "full");
console.log(admin.greet());       // "Hi, I'm Abhisek"
console.log(admin.accessLevel()); // "Abhisek has full access"