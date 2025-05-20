// Convert object to key-value string

function objectToQuery(obj){
    return Object.entries(obj).map(([key,value])=>(`${key}=${value}`)).join("&");
}

console.log(objectToQuery({ name: "abhi", age: 26 }));// Output: "name=abhi&age=26"