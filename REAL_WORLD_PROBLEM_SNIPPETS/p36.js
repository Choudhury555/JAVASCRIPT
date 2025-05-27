// Timer utility with callback
function startTimer(callback,delay){
    console.log("Timer Started");
    setTimeout(callback,delay);
}

startTimer(()=>{console.log("Time's Up!")},2000);