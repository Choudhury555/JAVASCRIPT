// Prevent modifications using Object.freeze()
const config = {
    apiKey: "12345",
    timeout: 5000
};

Object.freeze(config);

//these 2 lines will be ignored(no modification allowed) as use are freezing the config object
config.timeout=6000;
config.newProp="New Property";

console.log(config);
