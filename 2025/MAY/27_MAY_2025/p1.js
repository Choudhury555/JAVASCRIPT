//FUNCTION PARAMETERS/DEFAULT PARAMETERS

//NORMAL PARAMETERS
function greet_1(name){
    return `Hello ${name}`;
}

console.log(greet_1("Abhisek"));//Hello Abhisek

//DEFAULT PARAMETERS
function greet_2(name="Guest"){
    return `Hello ${name}`;
}

console.log(greet_2());//Hello Abhisek


//////////////REST PARAMETERS//////////////
//Allows passing any number of arguments as an array
function total(...nums){
    return nums.reduce((acc,n)=>acc+n,0)
}

console.log(total(1,2,3,4));
