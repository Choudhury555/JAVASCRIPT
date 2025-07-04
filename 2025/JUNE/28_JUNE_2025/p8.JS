// Write a function that cancels a timeout before it runs.

const tempId = setTimeout(()=>{
    console.log("It will never run");
},2000);

clearTimeout(tempId);