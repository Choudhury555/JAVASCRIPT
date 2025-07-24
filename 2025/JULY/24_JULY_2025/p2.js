// Converting JSON String → JS Object

const data = '{"name":"Abhisek","age":26}';
const user = JSON.parse(data);
console.log(user.age);
