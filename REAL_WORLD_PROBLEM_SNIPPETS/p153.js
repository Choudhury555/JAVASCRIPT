// Scope – var vs let inside loops
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 1000);// var: 3,3,3  (same variable shared)
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("let:", i), 1000);// let: 0,1,2  (new variable per iteration, block scoped)
}