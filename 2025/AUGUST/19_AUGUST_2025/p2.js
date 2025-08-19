// Symbols as Object Keys
const user = {
    name: "Abhisek",
    [Symbol("id")]: 123
}

console.log(user);

for (let key in user) {
    console.log(key, user[key]);// only "name"(Benefit → The id property is hidden from normal loops)
}