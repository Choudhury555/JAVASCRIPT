// Understand execution order
console.log("Start");

setTimeout(() => {
    console.log("setTimeout (Macrotask)")
}, 0);

Promise.resolve().then(()=>{
    console.log("Promise.then (Microtask)")
})

console.log("End");

// Start
// End
// Promise.then (Microtask)
// setTimeout (Macrotask)