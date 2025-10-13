// Intl.NumberFormat – Locale-Aware Number Formatting
const num = 1234567.89;

console.log(new Intl.NumberFormat("en-IN").format(num));//12,34,567.89
console.log(new Intl.NumberFormat("de-DE").format(num));//1.234.567,89
console.log(new Intl.NumberFormat("ar-EG").format(num));//١٬٢٣٤٬٥٦٧٫٨٩

// For currency:
const amount = 1234.5;

console.log(new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount));//$1,234.50
console.log(new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(amount));//₹1,234.50