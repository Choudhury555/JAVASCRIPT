// Relative Time Display (Activity Feed Example)

function timeAgo(minutes) {
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    if (minutes < 60) {
        return rtf.format(-minutes, "minute");
    }

    const hours = Math.floor(minutes / 60);
    return rtf.format(-hours, "hour")
}

console.log(timeAgo(5));// 5 minutes ago
console.log(timeAgo(92));// 1 hour ago

// NOTE==>Used in chat apps, notifications, and activity feeds to show human-readable time.