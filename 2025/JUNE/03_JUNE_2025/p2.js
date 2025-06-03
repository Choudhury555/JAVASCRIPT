//Callback Functions
//A function passedto another function to be executed later
function fetchData(callback){
    setTimeout(()=>{
        callback("Data Loaded");
    },1000)
}


fetchData((data)=>{
    console.log(data)
})


//Problem with Callbacks : Callback hell
// login(user,(res)=>{
//     getProfile(res,(profile)=>{
//         getFriends(profile,(friends)=>{
//             console.log(friends);
//         })
//     })
// })