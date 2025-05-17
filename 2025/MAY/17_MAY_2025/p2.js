//Array.find() and Array.fincIndex() method

//find() returns the first matching element and findIndex() returns the index of the first matching element

const users = [
    {id:1,name:"Choudhury"},
    {id:2,name:"Abhisek"},
]

const foundUser = users.find((user)=>user.id==2);

const foundUserIdx = users.findIndex((user)=>user.name=="Choudhury");

console.log(foundUser);
console.log(foundUserIdx);
