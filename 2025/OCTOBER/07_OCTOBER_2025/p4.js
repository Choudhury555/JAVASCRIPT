// BigInt – For Very Large Integers
// Added in ES2020.
// Represented by appending n.

const big = 9007199254740991n;
console.log(big + 2n);//9007199254740993n
// console.log(big+2);//TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(big + BigInt(4));//9007199254740995n