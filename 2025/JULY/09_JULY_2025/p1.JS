// Why Handle Errors?

// - To prevent app crashes
// - To show meaningful messages to users
// - To handle failed API calls, invalid inputs, etc.

try {
    const num = Number("ABC");
    if(isNaN(num)){
        throw new Error("Invalid Number...");
    }
} catch (error) {
    console.error(error.name);//Error
    console.error(error.stack);//Error: Invalid Number... at Object.<anonymous> (/Users/abhisek/Desktop/JS_BEGINNER_TO_ADVANCE/2025/JULY/09_JULY_2025/p1.JS:10:15)
    console.error("Some Error...");//Some Error...
    console.error(error.message);//Invalid Number...(this is coming from line no 10)
}