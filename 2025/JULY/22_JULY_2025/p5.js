// Fetch Multiple Requests in Parallel

Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
    fetch("https://jsonplaceholder.typicode.com/users/1")
])
.then(([postRes,userRes])=>{
    return Promise.all([postRes.json(),userRes.json()])
})
.then(([postData,userData])=>{
    console.log(postData);
    console.log(userData);
})