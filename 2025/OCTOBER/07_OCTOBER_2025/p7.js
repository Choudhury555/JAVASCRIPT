// Number Conversion Gotchas
console.log(Number("123"));//123
console.log(parseInt("123.34px.randomString"));//123
console.log(parseFloat("3.14randomString"));//3.14
console.log(+42);//42
console.log(+"42");//42
console.log(Number("abc"));//NaN