// Promise with error handling
function riskyOpeartion(){
    return new Promise((resolve,reject)=>{
        const success = Math.random()>0.5;
        setTimeout(()=>{
            success ? resolve("Success") : reject("Failed")
        },1000)
    })
}

riskyOpeartion()
    .then(msg=>console.log(msg))
    .catch(err=>console.error(err))