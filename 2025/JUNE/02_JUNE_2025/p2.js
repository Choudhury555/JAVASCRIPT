//Method Overriding

class Animal{
    speak(){
        return `Animal Speaks`;
    }
}

class Dog extends Animal{
    speak(){
        return `Dog barks`;
    }
}

const pet = new Dog();
console.log(pet.speak());
