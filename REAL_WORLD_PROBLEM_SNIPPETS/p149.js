// WeakMap for private object data
const privateData = new WeakMap();

class User {
    constructor(name, password) {
        this.name = name;
        console.log("value od this is==>", this);//User { name: 'Abhisek' }
        privateData.set(this, { password: password });
    }

    checkPassword(pass) {
        console.log(this);//User { name: 'Abhisek' }
        console.log(privateData.get(this));//{ password: 'secret123' }
        return privateData.get(this).password == pass;
    }
}

const abhisek = new User("Abhisek", "secret123");
console.log(abhisek.checkPassword("secret123"));//true
console.log(abhisek.checkPassword("newPassword"));//false
