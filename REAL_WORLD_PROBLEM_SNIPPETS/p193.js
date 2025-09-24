// Read-Only User ID
const user = {};
Object.defineProperty(user, "id", {
    value: 101,
    writable: false,// cannot be changed
    enumerable: true,
    configurable: false
});

console.log(user.id);//101
user.id = 200;//TypeError: Cannot assign to read only property 'id' of object '#<Object>'