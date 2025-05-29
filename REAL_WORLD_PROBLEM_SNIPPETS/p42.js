// Lost this in a detached function
const car = {
    brand: "Tesla",
    getBrand() {
        return this.brand;
    }
};

const getCarBrand = car.getBrand;
console.log(getCarBrand);//[Function: getBrand] (refer to p43.js for this line for bind() concept)
console.log(getCarBrand());//undefined

//You're detaching the method from car.
//So "this" is no longer car object — it becomes undefined