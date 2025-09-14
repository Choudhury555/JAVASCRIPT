// Book Class with Instance Method
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getDetails() {
        return `${this.title} by ${this.author}`;
    }
}

const b1 = new Book("Clean Code", "Robert C. Martin");
console.log(b1.getDetails());//Clean Code by Robert C. Martin