// Hoisting – Function vs Variable
greet();//works due to hoisting
function greet() {
    console.log("Hello Abhisek");
}

console.log(x);//undefined (var hoisted but not initialized)
var x = 10;

console.log(y);//ReferenceError (TDZ) Cannot access 'y' before initialization
let y = 20;