//Using AbortController with Fetch
const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/posts", { signal })
    .then(response => response.json())
    .then(data => console.log("✅ Data:", data))
    .catch(err => {
        if (err.name == "AbortError") {
            console.error("Request aborted after 300 ms");
        } else {
            console.error("❌ Fetch error:", err);
        }
    })

// Cancel request after 300 ms
setTimeout(() => controller.abort(), 300);