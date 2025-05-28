//PRACTICE ABOVE 3 files concepts
// 1.
function outer(){
    return function inner(){
        console.log("This is inner function");
    }
}

const temp = outer();
console.log(temp);//[Function: inner]
temp();//This is inner function


// 2.
function outer_1(){
    let count=0;
    return function inner_1(){
        count++;
        return count;
    }
}

const Counter = outer_1();
console.log(Counter());//1
console.log(Counter());//2


// 3.
function createCounter(){
    let count=0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    }
}

const counter = createCounter();
console.log(counter);//{ increment: [Function: increment], decrement: [Function: decrement], getCount: [Function: getCount]}

console.log(counter.getCount());//0

console.log(counter.increment());//1
console.log(counter.increment());//2

console.log(counter.decrement());//1
console.log(counter.decrement());//0


// 4.
function outer_2(){
    let x="This is Outer variable";
    function inner_2(){
        console.log(x);
    }
    inner_2();
}

outer_2();//10


