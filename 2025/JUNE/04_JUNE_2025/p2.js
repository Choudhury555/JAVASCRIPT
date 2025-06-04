//Using "await"
//"await" pauses the function until the Promise resolves

function delay(ms){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("This got resolved")
        },ms);
    })
}


async function loadData(){
    console.log("Loading...");
    
    const res = await delay(1000);
    console.log(res);
    
    console.log("Loaded");
}

loadData();