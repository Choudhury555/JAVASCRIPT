// Display “x days ago” using Intl.RelativeTimeFormat
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtf.format(-3, "day"));//3 days ago