// Global Symbol Registry with Symbol.for

const s1 = Symbol.for("id");
const s2 = Symbol.for("id");

console.log(s1 === s2); // true ✅ (shared from registry)

let obj = {
    [s1]: "Abhisek"
}

console.log(obj[s2]);// "Abhisek" (same symbol reference)