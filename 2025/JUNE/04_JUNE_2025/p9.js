//PRACTICE ABOVE 8 files concepts
// 1.
// function delay(ms){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Hi This is resolved")
//         },ms)
//     })
// }

// async function waitLog(){
//     console.log("Waiting...");

//     const res = await delay(2000);
//     console.log(res);

//     console.log("Done Waiting");
// }

// waitLog();


// 2.
// function fakeApiCall(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Fake Api response")
//         },2000)
//     })
// }

// async function fetchData(){
//     console.log("Fetching...");

//     const res = await fakeApiCall();
//     console.log(res);
    
//     console.log("Successfully Fetched");
// }

// fetchData();


// 3.
// function mightFail(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             reject("Something went wrong")
//         },2000)
//     })
// }

// async function callWithCatch(){
//     console.log("Fetching...");

//     try {
//         const res = await mightFail();
//         console.log(res);
//     } catch (error) {
//         console.error(error);
//     }
    
// }

// callWithCatch();


// 4.
function task1(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Task1 Done")
        },1000)
    })
}

function task2(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Task2 Done")
        },1500)
    })
}


async function runTasks(){
    const results = await Promise.all([task1(),task2()]);
    console.log(results);//[ 'Task1 Done', 'Task2 Done' ]
}

runTasks();