// Practice
// Create a Book class with title & author and a method to display details.
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    details() {
        return `${this.title} by ${this.author}`;
    }
}

const b1 = new Book("1984", "George Orwell");
console.log(b1.details());//1984 by George Orwell