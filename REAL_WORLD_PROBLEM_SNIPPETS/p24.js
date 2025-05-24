// Flatten a deeply nested array
const data = [1, [2, [3, [4, 5]]]];
// console.log(data.flat(1));//[ 1, 2, [ 3, [ 4, 5 ] ] ]
// console.log(data.flat(2));//[ 1, 2, 3, [ 4, 5 ] ]
// console.log(data.flat(3));//[ 1, 2, 3, 4, 5 ]

const flatData = data.flat(3);
console.log(flatData);//[ 1, 2, 3, 4, 5 ]
console.log(data);//[1, [2, [3, [4, 5]]]]


