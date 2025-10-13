// Intl.DateTimeFormat – Localized Dates
const date = new Date("2025-10-07T14:30:00Z");

console.log(new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "short" }).format(date));//Tuesday, October 7, 2025 at 8:00 PM
console.log(new Intl.DateTimeFormat("fr-FR", { dateStyle: "full", timeStyle: "short" }).format(date));//mardi 7 octobre 2025 à 20:00