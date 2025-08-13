onmessage = (e) => {
    let i = 0;

    function count() {//this also an infinity LOOP (setTimeout(count, 0); calling infinitely) This loop will only stop once "worker.terminate();" is called from main Thread
        i++;
        console.log(i);
        setTimeout(count, 0); // tiny pause to let terminate() take effect
    }

    count();
};
