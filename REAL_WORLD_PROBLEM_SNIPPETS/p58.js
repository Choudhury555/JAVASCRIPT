// Fetch user data simulation with await
function getUserData(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({name:"Abhisek",role:"Dev"})
        },2000)
    })
}

async function displayUserData(){
    const user = await getUserData();
    console.log(`User: ${user.name} and Role: ${user.role}`)
}

displayUserData();