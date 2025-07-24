// Pretty Printing JSON
const obj = {name:"Abhisek",age:26,place:"India"};
console.log(obj);
console.log(JSON.stringify(obj,null,2));// Beautified JSON with 2 spaces indentation (JSON.stringify(obj, replacer, space))

//A function → called for each key/value, lets you modify or skip values
const jsonStr_1 = JSON.stringify(obj,(key,value)=>{
    if(key=="age"){
        return undefined;
    }
    return value;
},2)

console.log(jsonStr_1);


//An array of property names → only include these keys
const jsonStr_2 = JSON.stringify(obj,["age","place"],2);

console.log(jsonStr_2)