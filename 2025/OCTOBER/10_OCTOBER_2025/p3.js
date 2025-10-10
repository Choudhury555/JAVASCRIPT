// Working with Timestamps
const timeStamp = Date.now();
console.log(timeStamp);//1760088841326 (milliseconds since Jan 1, 1970)

const formTs = new Date(timeStamp);
console.log(formTs.toUTCString());//Fri, 10 Oct 2025 09:35:08 GMT