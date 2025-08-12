onmessage = (e) => {
    console.log("Message from main",e.data);
    postMessage("Got it");
}