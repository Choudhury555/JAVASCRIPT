// Inside a Function (non-strict vs strict)
//Second part of "p2.js" (using "use strict")

"use strict"
function show_1() {
    console.log(this);
}
show_1();//undefined