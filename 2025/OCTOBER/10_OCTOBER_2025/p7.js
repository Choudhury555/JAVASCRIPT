// Temporal API (Future Replacement for Date)

// Still experimental but will become standard soon.
const { Temporal } = require("@js-temporal/polyfill");

const today = Temporal.Now.plainDateISO();
console.log(today);//PlainDate [Temporal.PlainDate] {}
console.log(today.toString());//2025-10-10


const tomorrow = today.add({ days: 1 });
console.log(tomorrow.toString());//2025-10-11