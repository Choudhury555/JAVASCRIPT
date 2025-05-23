// Filter valid marks from an array
function validMarks(arr){
    return arr.filter((mark)=>mark>=0 && mark<=100)
}

console.log(validMarks([89, -5, 102, 76, 55]));// Output: [89, 76, 55]