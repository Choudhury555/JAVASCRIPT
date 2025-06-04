// Wait for a delay using async/await
function waitForSomeTime(ms){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("This message got Resolved");
        },ms)
    })
}

async function delayedMessage(){
    console.log("Please wait...")
    
    const res = await waitForSomeTime(2000);
    console.log(res);

    console.log("Done Waiting");
}

delayedMessage();