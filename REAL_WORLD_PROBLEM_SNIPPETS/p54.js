// Convert a callback to a Promise
function simulateApiPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data loaded successfully");
            
        },1000)
    })
}

simulateApiPromise().then(data => console.log(data)); // "Data loaded successfully"