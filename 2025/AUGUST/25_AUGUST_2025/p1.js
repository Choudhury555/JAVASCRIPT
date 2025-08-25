//WeakMap
let user = { name: "Abhisek" };
const weakMap = new WeakMap();

weakMap.set(user, "Admin");

console.log(weakMap);//WeakMap { <items unknown> }
console.log(weakMap.get(user));//Admin

user = null;

console.log(weakMap.get(user));//undefined (object dereferenced → garbage collected. So weakMap will also lose this entry automatically)

