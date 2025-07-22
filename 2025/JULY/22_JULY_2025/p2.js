// POST Request (Sending Data)

fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({title:"New Post",body:"Hello",userId:1})
})
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.error(err))