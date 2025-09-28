// Read-Only Properties
const config = { appName: "MyApp", version: "1.0" };

const proxy = new Proxy(config, {
    deleteProperty(obj, prop) {
        if (prop == "version") {
            console.log("Cannot delete version!");
            return false;
        }
        return Reflect.deleteProperty(obj, prop);
    }
});

delete proxy.appName;
delete proxy.version;//Cannot delete version!
console.log(proxy);//{ version: '1.0' }

//NOTE==>The .cjs extension stands for CommonJS module files in Node.js.