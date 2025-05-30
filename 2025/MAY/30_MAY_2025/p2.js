//Creating your own Constructor and Prototype methods

function Person(name){//STNTAX OF CONSTRUCTOR BEFORE ES6
    this.name=name;
}

Person.prototype.sayHi = function(){
    return `Hi ${this.name}`;
}

const abhi = new Person("Abhisek");

console.log(abhi);//erson { name: 'Abhisek' }  (also another property is there (hidden), that is .__proto__ and that we are printing in the next line)
console.log(abhi.__proto__);//{ sayHi: [Function (anonymous)] }
console.log(abhi.sayHi());//Hi Abhisek