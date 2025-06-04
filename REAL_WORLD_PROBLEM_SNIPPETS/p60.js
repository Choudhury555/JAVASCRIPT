// Run two tasks in parallel using Promise.all
function fetchName(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Abhisek");
        },1000)
    })
}

function fetchRole(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Developer");
        },1000)
    })
}

async function loadProfile(){
    const res = await Promise.all([fetchName(),fetchRole()]);

    console.log(res);//[ 'Abhisek', 'Developer' ]
    console.log(`Name: ${res[0]} and Role: ${res[1]}`);//Name: Abhisek and Role: Developer
}

loadProfile();