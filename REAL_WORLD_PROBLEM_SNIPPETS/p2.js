// Check if a given email is valid (very basic check)

function isValidEmail(email){
    return email.includes('@') && email.endsWith(".com");
}

console.log(isValidEmail("test@example.com"));  // true
console.log(isValidEmail("test@example"));      // false