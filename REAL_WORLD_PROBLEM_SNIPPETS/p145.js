// Using Map for caching API results

const apiCache = new Map();

function fetchData(url) {
    if (apiCache.has(url)) {
        console.log("<==From Cache==>");
        return apiCache.get(url);
    } else {
        const data = `This is a MOCK response for ${url}`;
        apiCache.set(url, data);
        console.log("<==Fetched from API==>");
        return data;
    }
}

console.log(fetchData("https://api.example.com/user"));
console.log(fetchData("https://api.example.com/user"));//Cached