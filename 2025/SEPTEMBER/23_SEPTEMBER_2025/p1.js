// Property Attributes in JavaScript
// Each property in JS has attributes:
// value → the stored value.
// writable → can the value be changed?
// enumerable → does it show up in loops?
// configurable → can it be deleted or redefined?

const user = {};
Object.defineProperty(user, "name", {
    value: "Abhisek",
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(user.name);//Abhisek
user.name = "Choudhury";// ❌ ignored (writable: false)
console.log(user.name);//Abhisek

console.log(Object.getOwnPropertyDescriptors(user));
//{
// name: {
//     value: 'Abhisek',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   }
// }