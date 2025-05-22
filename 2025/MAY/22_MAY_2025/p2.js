//Getting porions of Arrays
let fruits = ["apple","banana","mango","grape","orange"];

//slice(start,end) NON-DESTRUCTIVE
let someFruits = fruits.slice(2,4);//4 is not included
console.log(someFruits);//[ 'mango', 'grape' ]


//splice(start,deleteCount,items) ADD/REMOVE element DESCRUCTIVE
fruits.splice(1,1);//remove 1 element at index 1
console.log(fruits);//[ 'apple', 'mango', 'grape', 'orange' ]

fruits.splice(2,1,"kiwi");//remove 1 element at index 2 and insert "kiwi" at index 2
console.log(fruits);//[ 'apple', 'mango', 'kiwi', 'orange' ]

