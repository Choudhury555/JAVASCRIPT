// What is JSON?

// JSON = JavaScript Object Notation
// A text-based format for storing & exchanging data between client/server
// Looks like a JavaScript object but is always a string when transferred


// Converting JS Object → JSON String
const user = {name:"Abhisek",age:26};
const data = JSON.stringify(user);
console.log(data);
