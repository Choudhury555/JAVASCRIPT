//Looping through objects with for..in

const user = {
    name:"Abhisek",
    age:25,
    place:"India"
}

for(let key in user){
    console.log(`${key} ==> ${user[key]}`);
}