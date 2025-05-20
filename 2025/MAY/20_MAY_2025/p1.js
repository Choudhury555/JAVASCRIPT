//Object

const user = {
    name:"Abhisek",
    age:26,
    place:"India"
}

//DOT notation
console.log(user.name);

//BRACKET notation
console.log(user["age"]);


//Modifying Properties
user.name="Choudhury Abhisek"
console.log(user);

//Adding Properties
user.state="Odisha"
console.log(user);

//Deleting a property
delete user.place
console.log(user);

//nested object
const emp = {
    name:"Swarup",
    info:{
        place:"Odisha",
        Phone:1234567890
    }
}
console.log(emp.info.Phone);

//Looping through an Object
for(let key in user){
    console.log(key,user[key]);
}