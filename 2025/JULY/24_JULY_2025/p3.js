// Fetch API Always Returns JSON String

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(res=>res.json())// converts JSON string → JS object
.then(data=>console.log(data))