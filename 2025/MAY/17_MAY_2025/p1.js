//Array reduce method

const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((accumulator, currentEle) => (accumulator + currentEle), 50);

console.log(total);
