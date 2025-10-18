// Extract All Numbers from a String
const orderInfo = "Order123, Item45, Batch6789";

const indivisualDigits = orderInfo.match(/\d/g);
console.log(indivisualDigits);//['1', '2', '3', '4', '5', '6', '7', '8', '9']

const numbers = orderInfo.match(/\d+/g);
console.log(numbers);//[ '123', '45', '6789' ]