// Closures

function outer() {
    let secret = "Hidden Message";
    return function inner() {
        console.log("Secret is:", secret);
    }
}

const reveal = outer();
console.log(reveal);//Till this point execution of outer function is already finished(but inner function still remembers "secret")
reveal();//Secret is: Hidden Message