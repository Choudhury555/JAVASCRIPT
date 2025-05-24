// Sort users by age (ascending)
const users = [
    { name: "Abhi", age: 28 },
    { name: "John", age: 22 },
    { name: "Mike", age: 25 }
];

users.sort((a,b)=>a.age-b.age);
console.log(users);//// Output: [{name: "John"}, {name: "Mike"}, {name: "Abhi"}]

