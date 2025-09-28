// Logging All Operations
const data = { id: 101 };

const proxy = new Proxy(data, {
    get(obj, prop) {
        console.log(`Getting ${prop}`);
        return obj[prop];
    },
    set(obj, prop, value) {
        console.log(`Setting ${prop} = ${value}`);
        obj[prop] = value;
        return true;
    }
});

proxy.id;//Getting id
proxy.id = 202;//Setting id = 202
console.log(proxy.id);//Getting id ==>(next line)202