//Create a counter using setInterval().
let count=0;

const counterId = setInterval(() => {
    console.log("Current Count: ",count);
    count++;

    if(count>5){
        clearInterval(counterId);
        console.log("Counter Stopped");
    }
},1000);