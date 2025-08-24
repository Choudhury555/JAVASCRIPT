// Removing duplicates with Set

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);