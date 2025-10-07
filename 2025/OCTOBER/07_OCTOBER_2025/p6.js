// Intl.NumberFormat – Locale-Aware Formatting
const price = 1234567.89;

const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
}).format(price);

console.log(formatted);//₹12,34,567.89