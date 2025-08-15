// Cancel a request after 1 second

const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/posts", { signal })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        if (err.name == "AbortError") {
            console.error("Request was canceled");
        } else {
            console.error(err);
        }
    })


setTimeout(() => controller.abort(), 1000);