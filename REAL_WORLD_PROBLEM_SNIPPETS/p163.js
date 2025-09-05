// Fixing this in setTimeout with bind
const user = {
    name: "Abhisek",
    greet() {
        setTimeout(function () {
            console.log("Hello,", this.name);
        }.bind(this), 1000)
    }
}

user.greet();//Hello, Abhisek