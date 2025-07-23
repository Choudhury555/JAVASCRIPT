// Fetch two APIs in parallel

async function loadData(){
    const [posts,users] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=2").then(res=>res.json()),
        fetch("https://jsonplaceholder.typicode.com/users?_limit=2").then(res=>res.json())
    ]);

    console.log("Posts are = ",posts);
    console.log("Users are = ",users);
}

loadData();