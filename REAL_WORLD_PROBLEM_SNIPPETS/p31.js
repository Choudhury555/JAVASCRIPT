// Merge user profile with default settings
const defaultSettings = { theme: "light", language: "en" };
const userSettings = { theme: "dark" };

const finalSettings = {...defaultSettings,...userSettings};
console.log(finalSettings); // Output: { theme: "dark", language: "en" }