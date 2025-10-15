// Currency Formatter for a Global E-Commerce Platform
function formatCurrency(amount, locale, currency) {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency
    }).format(amount);
}

console.log(formatCurrency(1499.99, "en-IN", "INR")); // ₹1,499.99
console.log(formatCurrency(1499.99, "en-US", "USD")); // $1,499.99
console.log(formatCurrency(1499.99, "ja-JP", "JPY")); // ￥1,500

// NOTE==>Used in e-commerce apps showing localized prices to users.