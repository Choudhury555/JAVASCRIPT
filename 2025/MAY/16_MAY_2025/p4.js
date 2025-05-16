//filter function

const numbers = [10,11,12,13,14,15];

const even = numbers.filter((num)=>{
    return num%2==0;
})

console.log(even);