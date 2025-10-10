// Formatting Dates with Intl.DateTimeFormat
const formatter = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short"
});

console.log(formatter.format(new Date()));//Friday 10 October, 2025 at 3:18 pm