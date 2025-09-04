//Practice
//Use apply to find the max value in an array (Math.max.apply).
const nums = [5, 12, 8, 3];
console.log(Math.max.apply(null, nums));

//Modern Alternative
console.log(Math.max(...nums));// Preferred in ES6+
