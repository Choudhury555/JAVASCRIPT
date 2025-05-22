// Remove all instances of a specific value
function removeAll(arr,item){
    return arr.filter((num)=>num!=item);
}

console.log(removeAll([1, 2, 2, 3, 2, 4], 2)); // Output: [1, 3, 4]