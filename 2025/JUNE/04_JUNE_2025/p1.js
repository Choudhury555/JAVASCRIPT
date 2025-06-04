//async/await in JS
// ==>It is a syntactic sugar over Promises
// ==>makes asynchronous code look synchronous
// ==>Avoids callback hell and makes logic easier to follow

async function greet(){
    return "Hello";
}

//async function by default returns a "Promise"
console.log(greet());//Promise { 'Hello' }
greet().then(console.log);//Hello (console.log is passed as a callback function==>once promise got resolved then console.log will get the data and can print it)
