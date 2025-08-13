onmessage = (e) => {
    console.log("Message from Main:", e.data);
    postMessage("Hi Main! Worker here");
}