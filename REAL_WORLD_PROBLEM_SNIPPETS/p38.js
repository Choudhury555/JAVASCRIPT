// Function factory (custom multiplier)
function mulyiplyBy(factor){
    return function inner(num){
        return num*factor;
    }
}

const doubleCount = mulyiplyBy(2);
console.log(doubleCount);//[Function: inner]

console.log(doubleCount(7));//14
