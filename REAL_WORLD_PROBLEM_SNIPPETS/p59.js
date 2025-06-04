// Handle rejected promise with try...catch
function failTask(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Something Failed")
        },2000)
    })
}

async function runTask(){
    try {
        const res = await failTask();
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}

runTask();