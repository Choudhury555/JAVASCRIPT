// JavaScript Modules


// Why Modules?

// - Organize code into separate files
// - Avoid global variable pollution
// - Reuse functions, classes, constants across files

import log, { PI } from "./healper.js";
import { add, multiply } from "./math.js";//Named Exports
import greet from "./utils.js";//Default Export

console.log(add(3,4));
console.log(multiply(7,3));

console.log(greet("Abhisek"));

log("This is from helper.js file");
console.log(PI);
