// Find the first even number greater than 50
function firstEvenOver50(arr){
    return arr.find((n)=>n>50 && n%2==0);
}
console.log(firstEvenOver50([30, 45, 53, 60, 73]));// Output: 60