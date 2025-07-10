// Throwing Your Own Errors

function divide(a,b){
    if(b==0){
        throw new Error("Division by Zero");
    }
    return a/b;
}

try {
    console.log(divide(5,0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Division operation done...");
    
}