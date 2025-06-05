//Combine setTimeout and Promise.resolve() in the same code
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);


Promise.resolve().then(()=>{
    console.log("Promise 1");
})

setTimeout(() => {
    console.log("Timeout 2");
}, 0);


Promise.resolve().then(()=>{
    console.log("Promise 2");
})


// Synchronous->Microtasks->Macrotasks

// Start
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2