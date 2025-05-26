// Remove a property from an object using destructuring
const user = { name: "Abhisek", age: 26, city: "Bhubaneswar" };

const {city,...remains} = user;
console.log(remains);// Output: { name: "Abhisek", age: 26 }
