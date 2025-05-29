//this in Object method

//Normal Function
const user_1={
    name:"Abhi",
    greet(){
        console.log(this.name);//Abhi
    }
}

user_1.greet();


//Arrow function
const user_2={
    name:"Abhi",
    greet:()=>{
        console.log(this.name);//undefined
    }
}

user_2.greet();
//Note: for Arrow function
//Arrow function do not have their own "this".
//"this" inside an Arrow function is lexically bound, means it used the value of "this" from "outer scope"