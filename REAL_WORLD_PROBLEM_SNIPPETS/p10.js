// Merge default settings with user settings
const defaultSettings = {
    theme: "light",
    notifications: true
};

const userSettings = {
    theme: "dark"
};

const finalSettings = {...defaultSettings,...userSettings};
console.log(finalSettings);
