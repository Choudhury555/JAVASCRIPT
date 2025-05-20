//Object.keys(),Object.values(),Object.entries()

const user = {
    name:"Abhisek",
    age:26,
    place:"India"
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//Check if a property exist
console.log("age" in user);
console.log("state" in user);

//Object Destructuring
const {age,place} = user;
console.log(age);
console.log(place);


