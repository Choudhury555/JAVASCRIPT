//Validating Elements
let nums = [10,20,30];

//SOME(at least one satisfies the condition)
console.log(nums.some((n)=>n>15));//true
console.log(nums.some((n)=>n>150));//false

//EVERY(all must satisfy the condition)
console.log(nums.every((n)=>n>15));//false
console.log(nums.every((n)=>n>5));//true

