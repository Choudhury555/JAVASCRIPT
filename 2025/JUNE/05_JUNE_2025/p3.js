//Multiple Promise.then() calls to test microtask queue
console.log("Script Start");

Promise.resolve().then(()=>{
    console.log("Promise 1")
}).then(()=>{
    console.log("Promise 2");
})

Promise.resolve().then(()=>{
    console.log("Promise 3")
})

console.log("Script End");


// Script Start
// Script End
// Promise 1
// Promise 3
// Promise 2

//Note :
// -> Each .then() adds a microtask
// -> Microtasks run in order,but (chained .then()) adds a new microtasks after the current ones finish