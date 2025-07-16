// Create and throw a custom error class

class AuthError extends Error {
    constructor(message){
        super(message);
        this.name = "AuthError";
    }
}

function login(user){
    if(!user){
        throw new AuthError("User not Provided");
    }
}

try {
    login(null);
} catch (error) {
    console.error(error.name);
    console.error(error.message);
}