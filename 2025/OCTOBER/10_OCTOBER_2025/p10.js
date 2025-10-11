// Practice
// Display current time in India and New York timezones
const date = new Date();
console.log("India:", date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));//India: 11/10/2025, 2:57:05 am
console.log("New York:", date.toLocaleString("en-US", { timeZone: "America/New_York" }));//New York: 10/10/2025, 5:27:05 PM