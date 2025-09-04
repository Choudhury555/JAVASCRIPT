//Practice
// Use bind to fix this inside a setTimeout.
const user = {
    name: "Abhisek",
    greet() {
        setTimeout(function () {
            console.log("Hello", this.name);
        }.bind(this), 1000);
    }
}

user.greet();//Hello Abhisek