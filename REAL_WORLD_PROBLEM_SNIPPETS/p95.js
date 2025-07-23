// Fetch with async/await and error handling

async function loadUser(id){
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if(!res.ok){
            throw new Error("User not Found");
        }

        const user = await res.json();
        console.log(user.name);
    } catch (error) {
        console.error(error.message);
    }
}

loadUser(5);