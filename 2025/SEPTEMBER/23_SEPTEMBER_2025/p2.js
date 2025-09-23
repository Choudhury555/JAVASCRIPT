// Making Properties Non-Enumerable
const user = { age: 26 };
Object.defineProperty(user, "ssn", {
    value: "123456789",
    enumerable: false
});

console.log(user);//{ age: 26 }  (because when enumerable:false will not show that property in console also)
console.log(user.ssn)//123456789
console.log(Object.keys(user));//[ 'age' ] → ssn hidden