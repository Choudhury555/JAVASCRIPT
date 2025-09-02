// Arrow function preserving this in async code
function Timer() {
    this.count = 0;

    setInterval(() => {// Arrow function inherits `this` from Timer → works correctly
        this.count++;
        console.log("Count:", this.count);
    }, 1000);
}

new Timer();