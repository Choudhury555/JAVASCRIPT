// JavaScript Modules


// Why Modules?

// - Organize code into separate files
// - Avoid global variable pollution
// - Reuse functions, classes, constants across files

import { add, multiply } from "./math.js";//Named Exports
import greet from "./utils.js";//Default Export

console.log(add(3,4));
console.log(multiply(7,3));

console.log(greet("Abhisek"));