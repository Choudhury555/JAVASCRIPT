// Inside an Object Method

//NORMAL FUNCTION INSIDE AN OBJECT
const user = {
    name: "Abhisek",
    greet: function () {
        console.log(this);//{ name: 'Abhisek', greet: [Function: greet] }
        console.log("Hello", this.name);//Hello Abhisek
    }
}

user.greet();

//ARROW FUNCTION INSIDE AN OBJECT (Arrow function refers to outer scope of "this")
const user_1 = {
    name: "Abhisek",
    greet_1: () => {
        console.log(this);//{}
        console.log("Hello", this.name);//Hello undefined
    }
}

user_1.greet_1();