// Hoisting
console.log(a);//undefined (hoisted, but not initialized)
var a = 10;

greet();//Hello (function declarations hoisted)

function greet() {
    console.log("Hello");
}


//ARROW FUNCTION THESE ARE HOISTING IS TREATED AS DIFFERENT

// hello(); //TypeError: hello is not a function

// var hello = () =>{
//     console.log("Hello from Arrow");
// }

// func_1();//ReferenceError: Cannot access 'func_1' before initialization

// const func_1 = () =>{
//     console.log("Hello from Arrow");
// }

//With const/let → ReferenceError (TDZ).
//With var → TypeError (undefined is not a function).