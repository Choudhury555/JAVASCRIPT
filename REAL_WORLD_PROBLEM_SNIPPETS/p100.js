// Convert JS Object → JSON for API POST

const newUser = {
    name:"Ram",
    email:"ram@gmail.com",
    role:"Developer"
}

fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(newUser)
})
.then(res=>res.json())
.then(data=>console.log("User Created",data))