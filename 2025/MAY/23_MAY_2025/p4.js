//PRACTICE ABOVE 3 files concepts

let arr = [1,2,3,4,5];

const squared = arr.map((n)=>n*n);
console.log(squared);

const filtered = arr.filter((n)=>n>3);
console.log(filtered);

console.log(arr.every((n)=>n%2==0));