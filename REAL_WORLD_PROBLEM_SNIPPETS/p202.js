// Default Message for Missing Properties
const user = { name: "Abhisek" };

const proxy = new Proxy(user, {
    get(obj, prop) {
        return prop in obj ? obj[prop] : `${prop} is not available`;
    }
});


console.log(proxy.name);//Abhisek
console.log(proxy.email);//email is not available