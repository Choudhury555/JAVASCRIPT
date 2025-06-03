//Promise
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data loaded")
        },1000)
    })
}

console.log(fetchData());

fetchData().then((data)=>{
    console.log(data);
})


//Promise Chain
// getUser()
//     .then(user=>getProfile(user))
//     .then(profile=>getFriends(profile))
//     .then(friends=>console.log(friends))
//     .catch(err=>console.log(err))

//Event Loop (Read from Google)