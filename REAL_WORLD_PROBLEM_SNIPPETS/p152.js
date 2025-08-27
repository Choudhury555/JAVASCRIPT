// Preventing duplicate visits with WeakSet
const visited = new WeakSet();

function visitPage(user) {
    if (visited.has(user)) {
        console.log(`${user.name} already visited`);
    } else {
        visited.add(user);
        console.log(`${user.name} visited for the first time`);
    }
}

let user = { name: "Abhisek" };
visitPage(user);//Abhisek visited for the first time
visitPage(user);//Abhisek already visited