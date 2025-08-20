// Custom type conversion with Symbol.toPrimitive

const amount = {
    value: 500,
    [Symbol.toPrimitive](hint) {
        if (hint == "number") {
            return this.value;
        }
        if (hint == "string") {
            return `₹${this.value}`;
        }
    }
}

console.log(+amount);// 500 (number conversion)
console.log(`${amount}`);// "₹500" (string conversion)