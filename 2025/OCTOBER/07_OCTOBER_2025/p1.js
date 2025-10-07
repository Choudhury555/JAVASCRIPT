// JavaScript has only one numeric type: Number.
// It’s a 64-bit floating-point (IEEE 754).
// Range: ±(2⁵³ − 1).

console.log(0.1 + 0.2);//0.30000000000000004 (❌ Precision issue)
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991