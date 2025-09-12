// Class Fields (Instance Properties)
// You can define properties directly in the class (outside constructor).
class Product {
    category = "Electronics";

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const laptop = new Product("Laptop", 50000);
console.log(laptop.category);//Electronics