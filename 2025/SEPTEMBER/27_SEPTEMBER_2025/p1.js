// What is a Proxy?
// A proxy wraps an object and allows you to control interactions with it.
// You define traps (handlers) for operations like get, set, deleteProperty.

const target = { name: "Abhisek", age: 26 };

const handler = {
    get(obj, prop) {
        return prop in obj ? obj[prop] : `Property ${prop} not found`;
    }
}

const proxy = new Proxy(target, handler);

console.log(proxy.name);//Abhisek
console.log(proxy.email);//Property email not found