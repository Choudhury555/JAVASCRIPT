// Insert item at a specific index
function insertAt(arr,idx,item){
    arr.splice(idx,0,item);
    return arr;
}

console.log(insertAt(["a", "b", "d"], 2, "c")); // Output: ["a", "b", "c", "d"]