//PRACTICE
// Difference between "this" in normal vs arrow functions
const obj = {
    name: "Abhisek",
    normal: function () {
        console.log("Normal:", this.name);//Normal: Abhisek
    },
    arrow: () => {
        console.log("Arrow:", this.name);//Arrow: undefined
    }
}

obj.normal();
obj.arrow();