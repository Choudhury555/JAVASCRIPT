// Safely Deleting Properties
const settings = { theme: "dark", version: "1.0" };

console.log(settings);//{ theme: 'dark', version: '1.0' }

Reflect.deleteProperty(settings, "theme");

console.log(settings);//{ version: '1.0' }