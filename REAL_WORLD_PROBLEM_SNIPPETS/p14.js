//Add item only if not already present

function addUniqueItem(arr,item){
    if(!arr.includes(item)){
        arr.push(item);
    }
    return arr;
}

console.log(addUniqueItem(["js", "html"], "css")); // ["js", "html", "css"]
console.log(addUniqueItem(["js", "html"], "js"));  // ["js", "html"]