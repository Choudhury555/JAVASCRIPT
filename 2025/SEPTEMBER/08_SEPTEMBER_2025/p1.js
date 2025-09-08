// Immutability
const user = { name: "Abhisek", age: 26 };
user.age = 27;// ❌ Mutating the original object
console.log(user);//{ name: 'Abhisek', age: 27 }


const user_1 = { name: "Abhisek", age: 26 };
const updatedUser = { ...user_1, age: 29 };// ✅ Immutable update (does not change the original object)
console.log(user_1);//{ name: 'Abhisek', age: 26 }