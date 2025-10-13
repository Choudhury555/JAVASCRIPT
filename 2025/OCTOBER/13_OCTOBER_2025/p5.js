// Intl.RelativeTimeFormat – Human-Friendly Time Differences
// Great for chat apps, dashboards, or activity feeds.
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

console.log(rtf.format(-1, "day"));//yesterday
console.log(rtf.format(1, "day"));//tomorrow
console.log(rtf.format(-3, "month"));//3 months ago

// NOTE==>Intl.RelativeTimeFormat is a JavaScript object for formatting time differences (e.g., "3 days ago" or "in 2 hours") based on locale.