//NOTE :
// ->Call Stack is for running code
// ->Web APIs for async tasks(e.g. setTimeout and fetch)
//Task queues(Microtask and Microtask) to defer code until the stack is free

function greet(){
    console.log("Hello");
}

greet();//pushed and popped from the call stack


// NOTE :
// Macrotask ==> executed after(Current stack + Microtask) e.g. setTimeout,setInterval,UI
// Microtask ==> executed after(Current stack) e.g. Promise,MutationObserver