// Finally Block (Always Runs)
const x=1;
try {
    if(x==1){
        throw new Error("Cancel");
    }else{
        console.log("try Block");
    }
} catch (error) {
    console.log("Catch Block");
} finally {
    console.log("FInally Block");
}