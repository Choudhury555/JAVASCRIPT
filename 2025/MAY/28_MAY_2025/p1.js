//SCOPE
//Scope defines where variables can be accessed
//JS has 3 scope (1)Global Scope (2)Function/Local Scope (3)Block Scope(let and const)

let a = 10; //global scope

function example(){
    let b =20;//function scope
    if(true){
        let c=30;//block scope
    }
}