//Transforming an array
let nums = [10,20,30];

//MAP
const doubled = nums.map((n)=>n*2);
console.log(doubled);//[ 20, 40, 60 ]

//FILTER
const filtered = nums.filter((n)=>n>15);
console.log(filtered);//[ 20, 30 ]

//FIND(returns the first element that satisfies the test)
const res = nums.find((n)=>n>15);
console.log(res);//20

//FINDINDEX(returns the index of first element that satisfies the test)
const res_1 = nums.findIndex((n)=>n>15);
console.log(res_1);//1


