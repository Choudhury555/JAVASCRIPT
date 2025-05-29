//Explicit "this" binding with call(),apply(),bind()

function greet(v1,v2){
    console.log(`Hello ${this.name} with ${v1} and ${v2}`);
}

const person = {
    name:"Abhisek"
}

greet.call(person,"Amit","Subash");//Hello Abhisek with Amit and Subash

greet.apply(person,["Amit","Subash"]);//Hello Abhisek with Amit and Subash

const boundFunc = greet.bind(person,"Amit");
boundFunc("Subash");//Hello Abhisek with Amit and Subash