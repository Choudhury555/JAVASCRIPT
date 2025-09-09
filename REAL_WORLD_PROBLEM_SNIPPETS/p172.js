// Rewrite a normal function in point-free style.
const words = ["hello", "world", "abhisek"];

//Normal Function Style
const normal = (arr) => arr.map((w) => w.toUpperCase());
console.log(normal(words));

//Point-Free Style

// <<==SOME IMPORATANT NOTE==>(FOR Point-Free Style)
// arr.map(String.prototype.toUpperCase.call, String.prototype.toUpperCase); ==>arr.map(callBackFunction,thisValueForCallback)
// So callBackFunction=String.prototype.toUpperCase.call and thisValueForCallback=String.prototype.toUpperCase
// generally the callbackfunction inside map is called as ==>callBackFunctioncall(thisValueForCallback, element, index, array)
//Then arr.map(String.prototype.toUpperCase.call, String.prototype.toUpperCase); will become ==> String.prototype.toUpperCase.call.call(thisValueForCallback, element, index, array)==>String.prototype.toUpperCase.call.call(String.prototype.toUpperCase, element, index, array)
//As String.prototype.toUpperCase.call === Function.prototype.call so ABOVE LINE WILL BECOME ==> Function.prototype.call.call(String.prototype.toUpperCase, element, index, array)
//How Function.prototype.call works (Function.prototype.call(fn, arg) is equals to just runs fn(arg) with arg as the thisArg.) that means ABOVE LINE WILL BE==> String.prototype.toUpperCase.call(element) i.e == String.prototype.toUpperCase.call("hello") // "HELLO"
const pointFreeStyle = (arr) => arr.map(String.prototype.toUpperCase.call, String.prototype.toUpperCase);
console.log(pointFreeStyle(words));//[ 'HELLO', 'WORLD', 'ABHISEK' ]



//<<<<<=====SOME NOTE=====>>>>>
// String.prototype.toUpperCase.call(123); // "123" → "123"
// String.prototype.toUpperCase.call(true); // "TRUE"
//in "map" function syntax is arr.map(callbackFunction,thisValueForCallback);
// const obj = { multiplier: 2 };

// const arr = [1, 2, 3];

// const result = arr.map(function (num) {
//   return num * this.multiplier;
// }, obj);//obj refers to thisValueForCallback

// console.log(result); // [2, 4, 6]