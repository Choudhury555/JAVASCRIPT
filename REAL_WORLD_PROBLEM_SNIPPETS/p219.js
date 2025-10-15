// Natural Language Lists for UI Display
const features = ["Fast Delivery", "Easy Returns", "24x7 Support"];

const formattedList = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction"
}).format(features);

console.log(`Our Features: ${formattedList}`);//Our Features: Fast Delivery, Easy Returns, and 24x7 Support


// NOTE==>Perfect for marketing UIs or feature summaries in web apps.