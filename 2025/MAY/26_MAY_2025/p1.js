//OBJECT DESTRUCTURING
//Extract values from an object and assign them to variables
const user = {
    name:"Abhisek",
    place:"India"
}

const {name,place} = user;

console.log(name);//Abhisek
console.log(place);//India

//With Default Value
const {city="Bhubaneswar"} = user;
console.log(city);//Bhubaneswar
console.log(user);//{ name: 'Abhisek', place: 'India' }


///////////ARRAY DESTRUCTURING///////////
const arr = [10,20,30];
const [a,b] = arr;
console.log(a);//10
console.log(b);//20

const [, ,third] = arr;
console.log(third);//30
