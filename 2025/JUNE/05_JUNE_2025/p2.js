//Microtask run first
console.log("Start")

setTimeout(() => {
    console.log("Macrotask");
}, 0);

Promise.resolve().then(()=>{
    console.log("Microtask");
})

console.log("End")

// Start
// End
// Microtask
// Macrotask