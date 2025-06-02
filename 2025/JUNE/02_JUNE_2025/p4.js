//Getters and Setters
class User{
    constructor(name){
        this._name=name;
    }

    get name(){
        return this._name.toUpperCase();
    }

    set name(value){
        console.log("setter is called");//if we remove "_"(underscore line no 4) from constructor then this set name(setter) will be called
        this._name=value.trim();
    }
}

const user = new User(" abhi ");

//Getters are accessed like properties, without parentheses.
console.log(user.name);//this will automatically call "get name(){...}"

//Here " ABHI ")(without trim) will be printed because we are directly assigning the value inside this._name through constructor
//if we write this.name=name; inside constructor then by default it will call the setter function (rule of JS)

//NOTE :
// remove _(underscore) inside the constructor and see the magic
//==>this._name=name; to this.name=name;


//NOTE : 
// this.temp="wow"; //this line means it will search for "setter accessor" exists for the property "temp"(if present the call that setter else create a temp variable and set "wow")