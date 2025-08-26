// PRACTICE
// Difference between Set and WeakSet when object is dereferenced

//Using Set
let obj1 = { name: "Set Object" };
const normalSet = new Set();
normalSet.add(obj1);

console.log("Before", normalSet);
obj1 = null;//I no longer need this variable to point to the object.(But the object is still in memory, because the Set still has a reference to it.)
console.log("After", normalSet);//Prevents GC (keeps objects in memory)


//Using Weak Set
let obj2 = { name: "WeakSet Object" };
const weakSet = new WeakSet();
weakSet.add(obj2);

console.log("Before", weakSet.has(obj2));
obj2 = null;
console.log("After", weakSet.has(obj2));//allows GC