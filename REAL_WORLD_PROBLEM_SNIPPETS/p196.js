// Non-Configurable Property
const settings = {
    theme: "dark"
}

Object.defineProperty(settings, "version", {
    value: "1.0",
    writable: true,
    configurable: false
});

console.log(settings.version);//1.0
delete settings.version;//TypeError: Cannot delete property 'version' of #<Object>