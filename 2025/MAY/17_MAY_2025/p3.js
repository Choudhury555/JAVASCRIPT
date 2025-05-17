//Array.every() and Array.some()
//.every() returns true only if all items pass the test
//.some() returns true at least one item passes the test

const marks = [10,20,30];

console.log(marks.every(score=>score>5));
console.log(marks.every(score=>score>20));
console.log(marks.some(score=>score>20));
