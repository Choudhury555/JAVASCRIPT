//Function Expressions and Arrow functions

const greet = function(name){
    console.log(`Hello ${name} from Function Expression`);//Function can be stored in variabels
}

const greetArrow = (name) => {
    console.log(`Hello ${name} inside Arrow Function`);
}

greet("Abhisek");
greetArrow("Abhisek");