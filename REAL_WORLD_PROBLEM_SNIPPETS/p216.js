// Calculate Event Duration (Time Difference)
function getDuration(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diffMns = end - start;

    const mins = Math.floor(diffMns / (1000 * 60)) % 60;//%60 is for remaining mins
    const hrs = Math.floor(diffMns / (1000 * 60 * 60));

    return `${hrs}h ${mins}m`;
}

console.log(getDuration("2025-10-07T09:00:00", "2025-10-07T11:45:00"));//2h 45m