//WeakSet
let user1 = { name: "Abhisek" };
let user2 = { name: "Gudu" };

const weakSet = new WeakSet([user1, user2]);

console.log(weakSet);//WeakSet { <items unknown> }
console.log(weakSet.has(user1));//true

user1 = null;// eligible for garbage collection (if object is no longer referenced, it’s auto-removed.)

console.log(weakSet.has(user1));//false