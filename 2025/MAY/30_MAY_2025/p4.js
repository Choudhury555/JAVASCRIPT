//Object.create() fro inheritance

const parent = {
    greet(){
        return "Hello from Parent";
    }
}

const child = Object.create(parent);//child can now access Parent's method

console.log(child);//{}
console.log(child.__proto__);//{ greet: [Function: greet] }  (this is hidden property)
console.log(child.greet());//Hello from Parent


//Prototye chain visual
// first child then parent then Object.prototype
// child-->parent-->Object.prototype