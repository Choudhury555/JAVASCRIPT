// Intercepting Deletes (deleteProperty)
const settings = { theme: "dark", version: "1.0" };


const proxy = new Proxy(settings, {
    deleteProperty(obj, prop) {
        if (prop == "version") {
            console.log("Version cannot be deleted!");
            return false;
        }
        return Reflect.deleteProperty(obj, prop);
    }
})


console.log(proxy);//{ theme: 'dark', version: '1.0' }
delete proxy.version;//Version cannot be deleted!
delete proxy.theme;
console.log(proxy);//{ version: '1.0' }