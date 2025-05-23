// Capitalize first letter of each name
function capitalizeNames(arr){
    return arr.map((name)=>name[0].toUpperCase()+name.slice(1));
}

console.log(capitalizeNames(["abhisek", "john", "mike"]));// Output: ["Abhisek", "John", "Mike"]