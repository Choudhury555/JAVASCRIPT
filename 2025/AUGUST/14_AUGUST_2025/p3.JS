// Setting a Request Timeout Helper

function fetchWithTimeOut(url, ms) {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => controller.abort(), ms);

    return fetch(url, { signal });
}



fetchWithTimeOut("https://jsonplaceholder.typicode.com/posts", 300)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(arr => console.error(arr.name))