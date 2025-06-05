// Chained Promises are still Microtasks
Promise.resolve().then(()=>{
    console.log("1st Microtask");

    Promise.resolve().then(()=>{
        console.log("Nested Microtask");
    })
})

console.log("Synchronous log");

// Synchronous log
// 1st Microtask
// Nested Microtask