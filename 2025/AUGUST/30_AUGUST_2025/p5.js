// this in Arrow Functions
// Arrow functions do not bind their own this.
// They inherit this from their surrounding (lexical) scope.
const obj = {
    name: "Abhisek",
    arrowFn: () => {
        console.log(this.name);
    },
    normalFn() {
        console.log(this.name);
    }
}

obj.arrowFn();// undefined (arrow inherits outer/global scope)
obj.normalFn();// Abhisek