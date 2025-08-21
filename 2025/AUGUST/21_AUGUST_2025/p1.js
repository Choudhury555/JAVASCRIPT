const userRoles = new Map();
userRoles.set("Abhisek", "Admin");
userRoles.set("Rahul", "Editor");

console.log(userRoles.get("Abhisek"));
console.log(userRoles.size);

for (let [key, val] of userRoles) {
    console.log(key, "->", val);
}