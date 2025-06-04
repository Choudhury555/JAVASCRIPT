//Promise.any() ==> Waits for the first fulfilled promise. Ignores rejections but fails if all promises are rejected

//SCENARIO 1 : One Resolved
const p1 = () => Promise.reject("Err1");
const p2 = () => Promise.resolve("Success");

Promise.any([p1(),p2()])
    .then(res=>console.log(res))//Success
    .catch(err=>console.error(err))


//SCENARIO 2 : All Rejected
const p3 = () => Promise.reject("Err3");
const p4 = () => Promise.reject("Err4");

Promise.any([p3(),p4()])
    .then(res=>console.log(res))
    .catch(err=>console.error(err))//[AggregateError: All promises were rejected] {[errors]: [ 'Err3', 'Err4' ]}