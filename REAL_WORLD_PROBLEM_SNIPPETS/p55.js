// Chain Promises to simulate login flow
function loginUser(username){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({username})
        },1000)
    })
}

function fetchProfile(user){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({...user,role:"admin"})
        },1000)
    })
}

loginUser("Abhisek")
    .then(fetchProfile)
    .then(profile=>{
        console.log(profile);//// Output after 2s: { username: "Abhisek", role: "admin" }
    })