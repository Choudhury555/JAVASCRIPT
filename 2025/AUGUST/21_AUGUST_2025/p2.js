const numbers = new Set([1, 2, 3, 4, 5, 5, 4, 1]);
const temp = new Set("hello");
console.log(numbers);//Set(5) { 1, 2, 3, 4, 5 }
console.log(temp);//Set(4) { 'h', 'e', 'l', 'o' }
console.log(temp.has("h"));//true