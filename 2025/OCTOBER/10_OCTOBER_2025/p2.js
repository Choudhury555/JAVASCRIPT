// Common Date Methods
const d = new Date();

console.log(d);//2025-10-10T09:25:58.022Z
console.log(d.getFullYear());//2025
console.log(d.getMonth());//9 0–11 (0 = Jan)
console.log(d.getDate());//10
console.log(d.getDay());//5 0–6 (0 = Sunday)
console.log(d.getHours());//14 (Local hour)
console.log(d.getMinutes());//59
console.log(d.toISOString());//2025-10-10T09:29:48.263Z (UTC format)