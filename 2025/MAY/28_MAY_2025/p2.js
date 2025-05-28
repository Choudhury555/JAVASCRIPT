//Lexical Scope/Lexical Environment
//Lexical scope is determined by where a variable is written in the code
function outer(){
    let name="Abhi";

    function inner(){
        console.log(name);//it can access outer's variable
    }

    inner();
}

outer();