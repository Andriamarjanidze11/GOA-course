class Book {
    constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
    }

    borrow() {
        if (this.isAvailable) {
        this.isAvailable = false;
        return `You borrowed ${this.title}`;
    } else {
        return `Sorry, ${this.title} is not available.`;
    }
    }
}