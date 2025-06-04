//Promise.race() ==> Returns the result of thr first settled promise(fulfilled or rejected)

//SCENARIO 1 : Fastest wins(Resolved)
const fast = () => new Promise(resolve=>{
    setTimeout(()=>{
        resolve("Fast Resolved");
    },500)
})

const slow = () => new Promise(resolve=>{
    setTimeout(()=>{
        resolve("Slow Resolved")
    },1000)
})

Promise.race([fast(),slow()])
    .then(result=>console.log(result))//Fast
    .catch(err=>console.error(err))


//SCENARIO 2 : Fast Rejected(Rejected)
const fast1 = () => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Fast Rejected");
    },500)
})

const slow1 = () => new Promise(resolve=>{
    setTimeout(()=>{
        resolve("Slow Resolved")
    },1000)
})

Promise.race([fast1(),slow1()])
    .then(result=>console.log(result))
    .catch(err=>console.error(err))//Fast Rejected