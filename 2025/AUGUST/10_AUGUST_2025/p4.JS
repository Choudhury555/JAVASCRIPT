const email1 = "test@example.com";
const email2 = "test@examplecom";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test(email1));//true
console.log(emailRegex.test(email2));//false