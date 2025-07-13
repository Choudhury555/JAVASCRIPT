// Use finally to log something regardless of error.

function check(age){
    if(age<18){
        throw new Error("Age can not be less than 18");
    }
    console.log("He/She can Vote");
}

try {
    check(17);
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Age Validation Completed");
}