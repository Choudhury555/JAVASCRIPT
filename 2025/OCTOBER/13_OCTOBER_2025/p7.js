// Prcatice
// Format a number for 3 locales: India, US, and Germany
const num = 1234567.89;

console.log("India:", new Intl.NumberFormat("en-IN").format(num));//India: 12,34,567.89
console.log("US:", new Intl.NumberFormat("en-US").format(num));//US: 1,234,567.89
console.log("Germany:", new Intl.NumberFormat("de-DE").format(num));//Germany: 1.234.567,89