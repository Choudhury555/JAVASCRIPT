// Utility Library with ESM
// Named exports
export function formatDate(date) {
    return date.toISOString().split("T")[0];
}

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}