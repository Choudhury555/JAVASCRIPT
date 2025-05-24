//PRACTICE ABOVE 2 files concepts
// 1.
let nums = [1,2,3,4,5];
const mul = nums.reduce((acc,n)=>acc*n,3);
console.log(mul);//360

// 2.
let str = ["bat","cat","apple"];
str.sort()
console.log(str);
str.reverse();
console.log(str);

// 3.
let arr = [1,[2,[3,[4]]]];
console.log(arr.flat());//[ 1, 2, [ 3, [ 4 ] ] ]
console.log(arr.flat(2));//[ 1, 2, 3, [ 4 ] ]
console.log(arr.flat(3));//[ 1, 2, 3, 4 ]

// 4.
let words = ["I","AM","FROM","INDIA","AND","I","LOVE","INDIA"];
console.log(words.join(" "));
