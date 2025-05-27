// Format a message using a callback
function format(name){
    return `Welcome, ${name}!`;
}

function greetUser(name,callback){
    return callback(name);
}

console.log(greetUser("Abhisek", format)); // Output: "Welcome, Abhisek!"