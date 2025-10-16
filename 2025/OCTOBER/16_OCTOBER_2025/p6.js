// Grouping & Escaping
// Use () for groups, and \ to escape special characters.

const price = /\$\d/;
// \$ escapes the dollar sign to match the literal character $.
// \d+ matches one or more digits (\d stands for any digit, and + means one or more).

console.log(price.test("$50"));//true ("$50" matches the pattern because it starts with a dollar sign followed by digits.)
console.log(price.test("100")); //false ("100" does not match because it lacks the dollar sign.)