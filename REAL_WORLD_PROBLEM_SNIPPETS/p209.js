// Fixing Floating-Point Precision (Billing System Example)
function calculateTotal(items) {
    const sum = items.reduce((acc, price) => acc + price, 0);
    return Number(sum.toFixed(2));//// Round to 2 decimal places
}

const prices = [0.1, 0.2, 0.3];
console.log(calculateTotal(prices));//0.6