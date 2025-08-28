let globalVariable = "I am global";

function demo() {
    let funVariable = "I am inside a function";

    if (true) {
        let blockVariable = "I am block scoped variable(created using LET) only you can access me inside this IF block";
        var a = "I am function scoped variable(created using VAR) you can access me any where insicde the FUNCTION";
        console.log(blockVariable);
    }

    console.log(a);
    // console.log(blockVar); // ❌ ReferenceError (blockVar is not defined)
}
demo();
// console.log(a);//a is not defined (a can be only accessed inside function demo)