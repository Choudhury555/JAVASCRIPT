// Check if all emails are from a specific domain
function areAllFromDomain(emailArr,domain){
    return emailArr.every((email)=>email.endsWith(`@${domain}`));
}

console.log(areAllFromDomain(["a@gmail.com", "b@gmail.com"], "gmail.com"));// Output: true
console.log(areAllFromDomain(["a@gmail.com", "b@google.com"], "gmail.com"));// Output: false