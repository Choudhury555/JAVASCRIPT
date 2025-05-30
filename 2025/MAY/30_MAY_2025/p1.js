//What is a Prototype ?
//Every JS object has a hidden internal property called [[Prototype]], which can be accessed via ".protptype"(for functions/constructors) or "__proto__"(for objects)

//What is Prototype Chain ?
// -> when you access a property or method on an object , JS looks for it in that corresponding object
// ->If it does not find it,then JS searches in the object's "prototype", and continues up the chain.

const obj = {};
console.log(obj.toString());//in "obj" there is no such method called "toString()" is present.
//it found that toString() method in "Object.prototype"