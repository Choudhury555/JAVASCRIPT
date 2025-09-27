// Intercepting Writes (set)
const user = { name: "Abhisek" };


const proxy = new Proxy(user, {
    set(obj, prop, value) {
        if (prop == "age" && value < 0) {
            throw new Error("Age can not be negative");
        }

        obj[prop] = value;
        return true;
    }
})


console.log(proxy);//{ name: 'Abhisek' }
proxy.age = 30;
console.log(proxy);//{ name: 'Abhisek', age: 30 }
// proxy.age = -1;//Error: Age can not be negative