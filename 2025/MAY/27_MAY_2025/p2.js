//CALLBACK FUNCTION
function sayHi(name){
    return `Hi ${name}`;
}

function greetUser(name,callback){
    return callback(name);
}

console.log(greetUser("Abhi",sayHi));