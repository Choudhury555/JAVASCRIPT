// Format Currency in Indian Locale (Intl.NumberFormat)
function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR"
    }).format(amount);
}

console.log(formatCurrency(1234567.89)); // ₹12,34,567.89