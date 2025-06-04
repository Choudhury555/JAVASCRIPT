/////Promise.allSettled() ==> waits for all promised to settle(either fulfilled opr rejected). It Never fails
const task5 = () => Promise.resolve("A");
const task6 = () => Promise.reject("B Rejected");

Promise.allSettled([task5(),task6()])
    .then(results=>console.log(results))

//here .catch is not rewuired because it never fails