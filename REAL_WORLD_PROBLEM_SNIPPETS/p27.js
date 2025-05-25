// Filter items that are unique to the first array
function uniqueInAOnly(arr1,arr2){
    const s2 = new Set(arr2);
    return arr1.filter((ele)=> !s2.has(ele));
}

console.log(uniqueInAOnly([1, 2, 3], [2, 3, 4]));// Output: [1]


// Filter only unique items from two arrays
function uniqueOnly(arr1,arr2){
    // console.log(...arr1.filter((ele)=> !arr2.includes(ele)));//1
    // console.log(...arr2.filter((ele)=> !arr1.includes(ele)));//4
    return [...arr1.filter((ele)=> !arr2.includes(ele)),...arr2.filter((ele)=> !arr1.includes(ele))]
}

console.log(uniqueOnly([1, 2, 3], [2, 3, 4]));// Output: [1,2]