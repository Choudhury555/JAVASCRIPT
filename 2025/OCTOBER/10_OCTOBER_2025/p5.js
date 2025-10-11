// Timezone Conversion
const date = new Date("2025-10-07T10:00:00Z");

console.log(date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));// (7/10/2025, 3:30:00 pm)
console.log(date.toLocaleString("en-US", { timeZone: "America/New_York" }));// (10/7/2025, 6:00:00 AM)

// Useful in global apps to show user-local time.