// Intl.Collator – Sorting Strings by Locale
// Used in apps sorting names, products, or locations correctly by locale.
const words = ["ä", "z", "a"];

console.log(words.sort());//[ 'a', 'z', 'ä' ] ❌ (wrong for German)

const collator = new Intl.Collator("de-DE");
console.log(words.sort(collator.compare));//[ 'a', 'ä', 'z' ]

// NOTE==>Intl.Collator is a JavaScript object used for comparing and sorting strings based on locale-specific rules.