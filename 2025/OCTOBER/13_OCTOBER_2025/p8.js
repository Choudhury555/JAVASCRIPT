// Practice
// Normal Sort
const normal = ["Zürich", "Amsterdam", "Berlin", "Århus"];
normal.sort();
console.log(normal);// 'Amsterdam', 'Berlin', 'Zürich', 'Århus' ]

// Sort an array of city names using Intl.Collator
const cities = ["Zürich", "Amsterdam", "Berlin", "Århus"];
cities.sort(new Intl.Collator("de").compare);
console.log(cities);//[ 'Amsterdam', 'Århus', 'Berlin', 'Zürich' ]