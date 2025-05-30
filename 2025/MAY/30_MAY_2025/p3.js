//Inheriting Prototypes Manually
function Animal(name){//Animal Constructor
    this.name=name;
}

Animal.prototype.speak = function (){
    return `${this.name} can speak`;
}

function Dog(name){
    Animal.call(this,name);//call the parent constructor (like SUPER keyword in ES6)
}

Dog.prototype = Object.create(Animal.prototype);//now Dog.prototype can inherit the methods from Animal.prototype

Dog.prototype.constructor=Dog;//Restores the constructor so it points to Dog. (NOTE->Due to "Object.create()" in the previous line Dog.prototype.constructor was pointing to "Animal" constructor)

Dog.prototype.bark = function(){
    return `${this.name} can bark`;
}


const myDog = new Dog("Rex");
console.log(myDog.speak());//coming from Animal prototype
console.log(myDog.bark());//coming from Dog prototype
