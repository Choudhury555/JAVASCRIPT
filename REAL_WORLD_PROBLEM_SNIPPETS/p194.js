// Hiding Sensitive Data from Loops
const account = {
    username: "Abhisek"
}

Object.defineProperty(account, "password", {
    value: "secret555",
    enumerable: false// hidden in loops
});

console.log(account.password);//secret555
console.log(Object.keys(account));//[ 'username' ]