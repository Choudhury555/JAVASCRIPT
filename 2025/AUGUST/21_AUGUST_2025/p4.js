//PRACTICE
//(1). Create a Map to store countries and their capitals.
const countryMap = new Map();
countryMap.set("India", "Delhi");
countryMap.set("USA", "Washington DC");

for (let [country, capital] of countryMap) {
    console.log(country, "->", capital);
}