// Private Methods
class User {
    #validateName(name) {
        if (!name) {
            throw new Error("Name is Required");
        }
    }

    constructor(name) {
        this.#validateName(name);
        this.name = name;
    }
}

const u = new User("Abhisek");
console.log(u.name);//Abhisek
// const u1 = new User("");//Error: Name is Required