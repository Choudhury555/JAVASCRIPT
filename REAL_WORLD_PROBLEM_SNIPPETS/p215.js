// Format Current Date in a Readable Way
const today = new Date();

const formatted = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
}).format(today);

console.log("Today's date:", formatted);//Today's date: Sunday 12 October, 2025