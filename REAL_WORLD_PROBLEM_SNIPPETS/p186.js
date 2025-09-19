// Private Method for Validation
class User {
    #validateEmail(email) {
        return email.includes("@");
    }

    constructor(name, email) {
        if (!this.#validateEmail(email)) {
            throw new Error("Invalid Email");
        }
        this.email = email;
        this.name = name;
    }
}

const u1 = new User("Abhisek", "abhisek@example.com");
console.log(u1.name, u1.email);//Abhisek abhisek@example.com