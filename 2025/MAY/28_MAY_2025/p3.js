//CLOSURES
//Closures is when a function "remembers" the variables from its outer scope even after the outer function has finished execution

function outer(){
    let count=0;
    return function inner(){
        count++;
        return count;
    }
}

const counter = outer();
console.log(counter);//[Function: inner]
console.log(counter());//1
console.log(counter());//2

//Here inner() forms a closures over count variable

//Closures used in :
// Data Hiding and encapsulation
// Creating private variable
// Currying
// Memoization
