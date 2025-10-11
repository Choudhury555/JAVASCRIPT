// Practice
// Calculate how many days are left in the current year
const today = new Date();
const endOfYear = new Date(today.getFullYear(), 11, 31);
const diff = Math.ceil((endOfYear - today) / (1000 * 60 * 60 * 24));
console.log(`${diff} days left in this year`);