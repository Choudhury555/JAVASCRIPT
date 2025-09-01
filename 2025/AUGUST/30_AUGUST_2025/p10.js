// Use bind to fix a detached function losing "this"
const user = {
    name: "Abhisek",
    greet: function () {
        console.log("Hello", this.name);
    }
}

const loose = user.greet;
loose();// Hello undefined (lost this)

const fixed = user.greet.bind(user);
fixed();//Hello Abhisek