// Create and throw a custom error type.
class AuthError extends Error {
    constructor(message){
        super(message);
        this.name = "AuthError";
    }
}

function login(user){
    if(!user){
        throw new AuthError("User not provided");
    }
}

try {
    login(null);
    console.log("Login Successful")
} catch (error) {
    console.error(error.name);
    console.error(error.message);
}