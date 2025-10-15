// Normal Sorting
const names_1 = ["Åke", "Zoe", "Álvaro", "Anna"];
names_1.sort();
console.log(names_1);//[ 'Anna', 'Zoe', 'Álvaro', 'Åke' ]


// Locale-Aware Sorting of Names
const names_2 = ["Åke", "Zoe", "Álvaro", "Anna"];
const collator = new Intl.Collator("sv-SE"); // Swedish locale
const sortedNameAsPerSwedishLocale = names_2.sort(collator.compare);
console.log(sortedNameAsPerSwedishLocale);//[ 'Álvaro', 'Anna', 'Zoe', 'Åke' ]


// NOTE==>Used in contact lists or databases that need culturally accurate sorting.