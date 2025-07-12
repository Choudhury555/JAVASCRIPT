// Create a function that throws if input is invalid.

function squareRoot(x){
    if(x<0){
        throw new Error("Negative number not allowed");
    }
    return Math.sqrt(x);
}

try {
    console.log(squareRoot(-9));
} catch (error) {
    console.error(error.message);
}