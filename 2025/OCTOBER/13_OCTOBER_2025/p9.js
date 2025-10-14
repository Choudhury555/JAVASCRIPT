// Practice
// Create a list of hobbies using Intl.ListFormat
const hobbies = ["reading", "coding", "traveling"];
const list = new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(hobbies);
console.log(list);//reading, coding, and traveling