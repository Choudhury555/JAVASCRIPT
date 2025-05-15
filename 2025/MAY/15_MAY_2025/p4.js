// Loops : for and for...of

const numbers = [10,20,30,40,50];

console.log("Using for");
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

console.log("Using for...of");
for(let num of numbers){
    console.log(num);
}