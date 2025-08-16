//Timeout helper function
//Stop fetch if it exceeds a given time limit.

function fetchWithTimeout(url, ms) {
    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => controller.abort(), ms);
    return fetch(url, { signal });
}


fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 1000)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error("⚠ Request stopped:", err.name))