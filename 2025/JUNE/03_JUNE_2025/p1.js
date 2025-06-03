//JS is a single-threaded. To avoid blocking operations like API calls or timers,it uses asynchronous pattern.

console.log("Start");

setTimeout(()=>{
    console.log("Async Task");
},1000)

console.log("End");
