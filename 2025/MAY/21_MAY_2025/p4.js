//Dynamic Property names
const key = "role";
const user = {
    name:"Abhisek",
    [key]:"Developer"
}

console.log(user.role)

//another example
const propertyName = "language";
const value = "JavaScript"

const programmingLanguage = {
    [propertyName]:value
}

console.log(programmingLanguage.language);
