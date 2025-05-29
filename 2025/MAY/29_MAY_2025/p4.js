//PRACTICE ABOVE 3 files concepts
// 1.
const obj_1 = {
    name:"Abhi",
    greet(){
        console.log(this.name);
    }
}

obj_1.greet();//Abhi


// 2.
const obj_2 = {
    name:"Abhi",
    greet:()=>{
        console.log(this.name);
    }
}

obj_2.greet();//undefined


// 3.
const user = {
    name:"Abhisek",
    sayHi(){
        console.log(this.name);
    }
}

const anotherUser = {
    name:"Shinu"
}

user.sayHi.call(anotherUser);//Shinu (anotherUser object borrows the user.sayHi function)


// 4.
function random(v1,v2){
    console.log(`Hello ${this.name} with ${v1} and ${v2}`);
}

const person = {
    name:"Abhisek"
}

const boundFunc = random.bind(person,"Shinu");
boundFunc("Chira");//Hello Abhisek with Shinu and Chira