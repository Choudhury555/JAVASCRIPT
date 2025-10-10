// Common Gotchas

// Month Indexing Starts at 0
const d = new Date(2025, 9, 7);
console.log(d.toUTCString());//Mon, 06 Oct 2025 18:30:00 GMT (October 7, not September because 0=January)

// Parsing is inconsistent for non-ISO formats
const d1 = new Date("10/07/2025");
console.log(d1);//2025-10-06T18:30:00.000Z (Depends on system locale)

// Always use ISO:
const d2 = new Date("2025-10-07");
console.log(d2);//2025-10-07T00:00:00.000Z (Consistent)