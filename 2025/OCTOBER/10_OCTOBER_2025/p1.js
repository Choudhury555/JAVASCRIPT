// Creating Dates
// Default format uses ISO 8601 (UTC) under the hood.

const now = new Date();
console.log(now);//2025-10-10T09:21:22.043Z (current date & time)

const specific = new Date("2025-10-07T10:00:00");
console.log(specific);