// Losing this in callbacks (and fixing with bind)
const user = {
    name: "Abhisek",
    greet() {
        console.log("Hello,", this.name);
    }
}

setTimeout(user.greet, 1000);//Hello, undefined (Once it's separated from user, it forgets where it came from.)

setTimeout(user.greet.bind(user), 1000);//Hello, Abhisek (bind fixes context)