// Sum any number of values using rest
const sumAll = (...nums) => {
    return  nums.reduce((total,num)=>total+num,0);
}

console.log(sumAll(10, 20, 30)); // 60