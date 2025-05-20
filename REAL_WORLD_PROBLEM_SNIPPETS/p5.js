// Find if a user has admin rights

const user1 = {
    name: "Abhisek",
    role: "admin",
    isActive: true
};
const user2 = {
    name: "Shinu",
    role: "developer",
    isActive: true
};

function isAdmin(userObj){
    return userObj.role==="admin";
}

  console.log(isAdmin(user1)); // true
  console.log(isAdmin(user2)); // true