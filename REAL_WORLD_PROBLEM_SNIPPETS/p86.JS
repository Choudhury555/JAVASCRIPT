// Function that throws for invalid input

function squareRoot(x){
    if(x<0){
        throw new Error("Can not calculate square root of negative number");
    }
    return Math.sqrt(x);
}

try {
    console.log(squareRoot(-9));
} catch (error) {
    console.error(error.message);
}