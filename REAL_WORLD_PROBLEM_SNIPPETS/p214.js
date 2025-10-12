// Calculate Days Remaining in the Year
function daysLeftInYear() {
    const today = new Date();
    const endOfYear = new Date(today.getFullYear(), 11, 31);
    const diffMns = endOfYear - today;
    return Math.ceil(diffMns / (1000 * 60 * 60 * 24));
}

console.log(`Days left this year: ${daysLeftInYear()}`);//Days left this year: 80