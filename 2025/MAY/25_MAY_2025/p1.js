//SET == Collection of unique values
//Automatically remove duplicates and can store any types of value

const nums = new Set([1,2,3,1,2]);
console.log(nums);

nums.add(5);
console.log(nums);

console.log(nums.has(2));

nums.delete(2);
console.log(nums);

//convert SET to ARRAY
const arr = [...nums];
console.log(arr);
