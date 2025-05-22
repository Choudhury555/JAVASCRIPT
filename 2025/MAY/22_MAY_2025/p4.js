//PRACTICE ABOVE 3 files concepts

let cities = ["Jajpur","Bhubaneswar","Delhi","Bagalore"];

console.log(cities);//[ 'Jajpur', 'Bhubaneswar', 'Delhi', 'Bagalore' ]

cities.push("Cuttack");
cities.unshift("Puri");

console.log(cities);//[ 'Puri', 'Jajpur', 'Bhubaneswar', 'Delhi', 'Bagalore', 'Cuttack' ]

cities.shift();

console.log(cities);//[ 'Jajpur', 'Bhubaneswar', 'Delhi', 'Bagalore', 'Cuttack' ]

let lastTwoCities = cities.slice(-2);
console.log(lastTwoCities);//[ 'Bagalore', 'Cuttack' ]
