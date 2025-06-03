// Simulate an API call using a callback
function simulateApiCall(callback){
    console.log("Fetching Data...");
    setTimeout(()=>{
        callback("Data Received")
    },1000)
}

simulateApiCall((result) => {
    console.log(result); // "Data received!"
});