// Checking for Errors

async function fetchData(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
        if(!res.ok){
            throw new Error(`HTTP Error ${res.status}`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

fetchData();