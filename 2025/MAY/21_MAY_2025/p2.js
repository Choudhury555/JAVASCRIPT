// Object.freeze() and Object.seal()

//Object.freeze() makes the object completely immutable
//Object.seal() allows changing existing properties but not adding/removing properties

//freeze
const user_1={
    name:"Abhisek",
    place:"INDIA"
}
Object.freeze(user_1);
user_1.name = "Choudhury";//it will be ignored
user_1.age=25;//it will be ignored
console.log(user_1);

//seal
const user_2={
    name:"Abhisek",
    place:"INDIA"
}
Object.seal(user_2);
user_2.name = "Choudhury";//it can be done
user_2.age=25;//it will be ignored(allows changing existing properties but not adding/removing properties)
console.log(user_2);
