// MAP == Key-Value pairs (like objects but with more flexibility)
//KEY can be of any types

const myMap = new Map();
console.log(myMap)
myMap.set("name","Abhisek");
myMap.set(1,"one");
myMap.set(true,"yes");

console.log(myMap);
console.log(myMap.get("name"));//Abhisek
console.log(myMap.get(true));//yes
console.log(myMap.has(1));//true

// looping through a Map
for(let [key,value] of myMap){
    console.log(key,value);
}
