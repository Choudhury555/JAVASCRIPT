// Updating & Reading Properties with Reflect
const user = { name: "Abhisek", role: "Developer" };

// Update
Reflect.set(user, "role", "Senior Developer");

// Read
console.log(Reflect.get(user, "role"));//Senior Developer