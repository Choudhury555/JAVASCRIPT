// Math Object Essentials
console.log(Math.floor(3.9));//3
console.log(Math.ceil(3.1));//4
console.log(Math.round(3.6));//4
console.log(Math.round(3.5));//4
console.log(Math.round(3.4));//3
console.log(Math.random());// 0 → 1 (exclusive)

// Example: Random integer between min and max
function randomInt(minEle, maxEle) {
    return Math.floor(Math.random() * (maxEle - minEle + 1)) + minEle;
}

console.log(randomInt(5, 10));