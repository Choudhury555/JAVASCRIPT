// Error Object Properties

try {
    throw new Error("Something broke...");
} catch (error) {
    console.log(error.name);//Error
    console.log(error.message);//Something broke...
    console.log(error.stack);//Error: Something broke... at Object.<anonymous> (/Users/abhisek/Desktop/JS_BEGINNER_TO_ADVANCE/2025/JULY/09_JULY_2025/p2.JS:4:11)
}