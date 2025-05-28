// Persistent variable using lexical scope
function greet(name){
    return function(){
        console.log(`Hello ${name}`);
    }
}

const greetAbhi = greet("Abhisek");
console.log(greetAbhi);//[Function (anonymous)]

greetAbhi();//Hello Abhisek
