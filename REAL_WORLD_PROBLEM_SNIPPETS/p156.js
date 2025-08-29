// Closure – Counter Factory
function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
            console.log("Count:", count);
        },
        decrement() {
            count--;
            console.log("Count:", count);
        }
    }
}

const counter = createCounter();
console.log(counter);//{ increment: [Function: increment], decrement: [Function: decrement] }

counter.increment();//1
counter.increment();//2
counter.decrement();//1
counter.decrement();//0
counter.increment();//1
