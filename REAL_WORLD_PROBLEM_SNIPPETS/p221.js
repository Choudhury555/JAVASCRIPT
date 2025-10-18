// Validate Username Format
// Only letters, numbers, and underscores allowed; must start with a letter; length 3–15
function validateUsername(username) {
    const pattern = /^[a-zA-Z]\w{2,14}$/;
    return pattern.test(username);
}

console.log(validateUsername("Abhisek_01"));// true
console.log(validateUsername("_abhisek"));// false
console.log(validateUsername("ab"));// false