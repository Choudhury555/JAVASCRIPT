// Calculating Time Differences
const start = new Date("2025-10-07T10:00:00");
const end = new Date("2025-10-07T12:30:00");

const diffMs = end - start;
console.log(diffMs);//9000000 (in milli Second)

const diffHrs = diffMs / (1000 * 60 * 60);
console.log(`${diffHrs} hours`);//2.5 hours