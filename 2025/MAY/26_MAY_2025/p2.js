//REST OPERATOR
//In destructuring : gathers the remaining elements

const [first,...remainings] = [1,2,3,4];
console.log(remainings);


const {name,...others} = {name:"Abhisek",place:"India",city:"Bhubaneswar"};
console.log(name);
console.log(others);
