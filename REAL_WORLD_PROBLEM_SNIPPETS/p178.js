// Static Method to Count Instances
class Book {
    static count = 0;

    constructor(title, author) {
        this.title = title;
        this.author = author;
        Book.count++;
    }

    static getCount() {
        return `Total books: ${Book.count}`;
    }
}

const b1 = new Book("Clean Code", "Robert C. Martin");
const b2 = new Book("Eloquent JavaScript", "Marijn Haverbeke");

console.log(Book.getCount()); // Total books: 2