// Practice
// Format numbers as INR currency
function formatINR(amount) {
    return amount.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR"
    })
}

console.log(formatINR(250000)); // ₹2,50,000.00