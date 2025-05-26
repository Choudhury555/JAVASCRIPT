//PRACTICE ABOVE 3 files concepts
// 1.
const user = {
    name:"Ahisek",
    age:25,
    place:"India"
}

const {age,name} = user;
console.log(name,age);//Ahisek 25

// 2.
const arr = [25,24,32,75];
const [a,b,...remains] = arr;
console.log(a);//25
console.log(b);//24

// 3.
const obj1 = {a:1};
const obj2 = {b:2};

const obj3 = {...obj1,...obj2};
console.log(obj3);


// 4.
function acceptAnyNumberOfArguments(...variables){
    console.log(variables);//[ 1, 2, 3 ]
    console.log(...variables);//1 2 3
}

acceptAnyNumberOfArguments(1,2,3);
acceptAnyNumberOfArguments(1,2,3,4,5);
acceptAnyNumberOfArguments(1,2,3,4,5,[6,7]);