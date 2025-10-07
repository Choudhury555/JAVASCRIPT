console.log(0.3 - 0.2 == 0.1);//false
console.log(0.3 - 0.2);//0.09999999999999998

// Fix using rounding functions:
function roundDigit(num, decimals = 2) {
    return Number(num.toFixed(decimals));
}

console.log(roundDigit(0.3 - 0.2));//0.1