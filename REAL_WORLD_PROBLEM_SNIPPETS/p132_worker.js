onmessage = () => {
    let start = Date.now();
    while (Date.now() - start < 3000) { }// block inside worker only(for 3 sec)
    postMessage("Image optimized successfully!");
}