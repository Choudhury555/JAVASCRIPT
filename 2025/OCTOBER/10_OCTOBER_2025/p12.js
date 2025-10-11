// Practice
// Format today’s date using Intl.DateTimeFormat
const formatter = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

console.log(formatter.format(new Date));//Saturday 11 October, 2025