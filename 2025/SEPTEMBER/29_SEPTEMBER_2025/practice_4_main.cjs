const counter1 = require("./practice_4_counter.cjs");
const counter2 = require("./practice_4_counter.cjs");


counter1.count++;
console.log(counter2.count);// 1 ✅ Same object (cached by require)