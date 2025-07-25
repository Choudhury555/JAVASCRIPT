// Fetch API & pretty print JSON

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(res=>res.json())
.then(data=>{
    console.log("Data Fetched");
    console.log(JSON.stringify(data,null,2));
    
})