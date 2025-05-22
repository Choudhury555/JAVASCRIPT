//Get last N items from an array

function getLastNItems(arr,n){
    return arr.slice(-n);
}
console.log(getLastNItems([1, 2, 3, 4, 5, 6], 3)); // Output: [4, 5, 6]