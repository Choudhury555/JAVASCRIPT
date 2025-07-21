// Mix default and named exports

export default function divide(a,b){
    return b!=0 ? a/b : "Can not divide by zero";
}

export const PI=3.14159;
export const square = (n) => n*n;