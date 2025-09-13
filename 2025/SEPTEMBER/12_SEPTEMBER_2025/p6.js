// Practice
// Add a static method to count total books created.
class Book {
    static count = 0;

    constructor(title, author) {
        this.title = title;
        this.author = author;
        Book.count++;
    }

    static totalBooks() {
        return Book.count;
    }
}

new Book("1984", "Orwell");
new Book("Animal Farm", "Orwell");
console.log(Book.totalBooks()); // 2