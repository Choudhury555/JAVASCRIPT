// Function with dynamic arguments using rest
function sumAll(...nums){
    return nums.reduce((acc,ele)=>acc+ele,0)
}

console.log(sumAll(1, 2, 3, 4)); // 10