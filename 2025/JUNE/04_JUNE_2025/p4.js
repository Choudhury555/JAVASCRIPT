function getData(flag){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(flag){
                resolve({name:"Abhisek"})
            }else{
                reject("Rejected")
            }
        },1000)
    })
}

async function showData(flag){
    try {
        const data = await getData(flag);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

showData(true);
showData(false);