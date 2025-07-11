// Custom Error Class

class ValidationError extends Error {
    constructor(abc){
        super(abc);
        this.name = "Validation Error";
    }
}

function checkAge(age){
    if(age<18){
        throw new ValidationError("Age Must be 18 or above");
    }
    console.log("Access granted");
}

try {
    checkAge(15);
} catch (error) {
    console.error(error.name);
    console.error(error.message);
}