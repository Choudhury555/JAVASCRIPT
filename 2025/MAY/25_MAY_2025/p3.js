//PRACTICE ABOVE 2 files concepts
// 1.
const s = new Set([2,2,1,1,3]);
console.log(s);
console.log(s.has(5));

// 2.
const m = new Map([[1,"one"]]);
console.log(m);
m.set("wow","nice")
console.log(m);

// 3.
for(let [key,value] of m){
    console.log(key,value);
}