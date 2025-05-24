//REVERSE()
let nums = [1,2,3];

nums.reverse();
console.log(nums);//[ 3, 2, 1 ]

// JOIN()
let words = ["I","LOVE","JS"];
console.log(words.join(" "));//I LOVE JS

//FLAT()
let nested = [1,[2,3],[4,[5]]];
console.log(nested.flat());//[ 1, 2, 3, 4, [ 5 ] ]
console.log(nested.flat(1));//[ 1, 2, 3, 4, [ 5 ] ]  (this one and above one are first level flatens)
console.log(nested.flat(2));//[ 1, 2, 3, 4, 5 ]  (second level flatens)


