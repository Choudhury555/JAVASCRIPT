// Combining Intl APIs
const price = 1299.99;
const date = new Date();

const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
}).format(price);

const formattedDate = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium"
}).format(date);

console.log(`Price: ${formattedPrice} (as of ${formattedDate})`);//Price: ₹1,299.99 (as of 13 Oct 2025)