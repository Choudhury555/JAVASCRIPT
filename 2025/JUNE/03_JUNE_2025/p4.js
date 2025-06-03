//PRACTICE ABOVE 3 files concepts
// 1.
function logAfter1Second(callback){
    setTimeout(()=>{
        callback();
    },1000)
}

logAfter1Second(()=>{
    console.log("Logged After 1 second");
})

// 2.
function waitTwoSeconds(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Resolved After 2 seconds");
        },2000)
    })
}

waitTwoSeconds()
    .then(message=>{
        console.log(message);
    })


// 3.
Promise.resolve("First Step")
    .then(result=>{
        console.log(result);
        return "Second Step";
    })
    .then(result=>{
        console.log(result);
    })


// 4.
function fakeLogin(username,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(username=="admin" && password=="1234"){
                resolve("Login Successful")
            }else{
                reject("Invalid Credentials")
            }
        },1000)
    })
}

fakeLogin("admin","1234")
    .then(msg=>console.log(msg))
    .catch(err=>console.log(err));