// Named exports for utilities

export function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}

export function reverse(str){
    return str.split("").reverse().join("");
}