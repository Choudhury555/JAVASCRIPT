/////Promise.all() ==> waits for all promises to resolve and Fails fast on first Rejection

//SCENARIO 1 : All Resolved
const task1 = () => new Promise(resolve => resolve("A"));//both ways are correct (this line below line are same)
const task2 = () => Promise.resolve("B");

Promise.all([task1(),task2()])
    .then(results=>console.log(results))//[ 'A', 'B' ]
    .catch(err=>console.error(err))


//SCENARIO 2 : One Rejected
const task3 = () => Promise.resolve("A");
const task4 = () => Promise.reject("B Rejected");

Promise.all([task3(),task4()])
    .then(results=>console.log(results))
    .catch(err=>console.error(err))//B Rejected
