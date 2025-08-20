// Hiding private properties with Symbols
const password = Symbol("password");

const user = {
    name: "Abhisek",
    age: 26,
    [password]: "secret123"
}

console.log(user.name);//Abhisek
console.log(user.age);//26
console.log(user.password);//undefined
console.log(user[password]);//secret123

for (let key in user) {
    console.log(key,user[key]);// only logs "name", "age" → symbol is hidden
}
