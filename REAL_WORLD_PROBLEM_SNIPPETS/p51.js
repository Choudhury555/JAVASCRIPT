// Use getters and setters
class Product{
    constructor(title,price){
        this.title=title;
        this.price=price;
    }

    get title(){
        return this._title.toUpperCase();
    }

    set title(value){
        this._title=value.trim();
    }

    set price(value){
        this._price=value;
    }

    get priceWithTax(){
        return this._price*1.18;
    }
}

const item = new Product("  notebook ", 100);
console.log(item.title);         // "NOTEBOOK"
console.log(item.priceWithTax);  // 118