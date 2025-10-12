// Show Current Time in Multiple Timezones
const now = new Date();

const indiaTime = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
const usaTime = now.toLocaleString("en-US", { timeZone: "America/New_York" });
const japanTime = now.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });

console.log("India:", indiaTime);//India: 12/10/2025, 11:52:06 am
console.log("USA:", usaTime);//USA: 10/12/2025, 2:22:06 AM
console.log("Japan:", japanTime);//Japan: 2025/10/12 15:22:06