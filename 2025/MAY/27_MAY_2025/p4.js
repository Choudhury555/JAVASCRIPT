//PRACTICE ABOVE 3 files concepts
// 1.
function greetUser(defaultName = "Guest"){
    return `Hello ${defaultName}`;
}

console.log(greetUser());//Hello Guest

// 2.
function sumOfNums(...nums){
    return nums.reduce((acc,n)=>acc+n,0);
}

console.log(sumOfNums(10,20,30,40));//100


// 3.
function sayWelcomeFunc(name){
    return `Welcome ${name}`;
}

function greet(name,callback){
    return callback(name);
}

console.log(greet("Abhisek",sayWelcomeFunc));


// 4.
const multiply = (a,b) => {
    return a*b;
}


console.log(multiply(5,8));//40
