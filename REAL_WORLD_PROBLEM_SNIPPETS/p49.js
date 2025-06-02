// Class with method and constructor
class Car{
    constructor(brand,year){
        this.brand=brand;
        this.year=year;
    }

    getInfo(){
        return `${this.brand} was made in ${this.year}`;
    }
}


const myCar = new Car("Tesla", 2023);
console.log(myCar.getInfo()); // "Tesla was made in 2023"