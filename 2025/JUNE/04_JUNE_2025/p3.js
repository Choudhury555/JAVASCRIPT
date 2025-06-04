function getUser(){
    
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({name:"Abhisek"})
        },1000)
    })
}

async function showUser(){
    const user = await getUser();
    console.log(user);
}

showUser();