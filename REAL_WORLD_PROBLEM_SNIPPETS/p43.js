// Fixing context using bind()
const car = {
    brand: "Tesla",
    getBrand() {
        return this.brand;
    }
};

const getCarBrand = car.getBrand.bind(car);
console.log(getCarBrand);//[Function: bound getBrand]  (here please focus on "bound")
console.log(getCarBrand());//Tesla