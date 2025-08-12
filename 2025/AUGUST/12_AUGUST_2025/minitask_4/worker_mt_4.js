onmessage = (e) => {
    console.log("Worker received:", e.data);

    let pixels = [];
    for (let i = 1; i <= 1000000; i++) {
        pixels.push(i % 255);
    }

    postMessage("Processing complete! Total pixels: " + pixels.length);
}