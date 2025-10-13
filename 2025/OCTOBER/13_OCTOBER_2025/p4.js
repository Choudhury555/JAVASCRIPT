// Intl.ListFormat – Natural-Language Lists
const fruits = ["apples", "bananas", "mangoes"];

const listEn = new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(fruits);
const listFr = new Intl.ListFormat("fr", { style: "long", type: "conjunction" }).format(fruits);

console.log(listEn);//apples, bananas, and mangoes
console.log(listFr);//apples, bananas et mangoes

// NOTE==>Intl.ListFormat is a JavaScript object that formats arrays into language-specific list strings, like "apples, bananas, and mangoes."