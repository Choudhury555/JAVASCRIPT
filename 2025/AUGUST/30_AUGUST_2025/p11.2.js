//Strict
"use strict";
function strictFn() {
    console.log(this);//undefined
}

strictFn();