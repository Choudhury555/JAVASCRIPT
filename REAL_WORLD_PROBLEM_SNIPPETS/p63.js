// setTimeout inside Promise
Promise.resolve().then(()=>{
    console.log("Microtask: Promise resolved");

    setTimeout(() => {
        console.log("Macrotask inside Microtask");
    }, 0);
})

console.log("End");

// End
// Microtask: Promise resolved
// Macrotask inside Microtask