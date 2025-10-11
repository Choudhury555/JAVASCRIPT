// Practice
// Get the current date in YYYY-MM-DD format
const today = new Date();
const formatted = today.toISOString().split("T")[0];
console.log(formatted);//2025-10-10