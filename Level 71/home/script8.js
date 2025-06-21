let library = [
    { title: "1984", author: "George Orwell", copies: 4 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", copies: 3 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", copies: 5 }
];

function addBook(book) {
    library.push(book);
    return library;
}

function removeLastBook() {
    library.pop();
    return library;
}

function updateBookCopies(title, newCopies) {
    let index = library.findIndex(book => book.title === title);
    if (index !== -1) {
    const updatedBook = { ...library[index], copies: newCopies };
    library.splice(index, 1, updatedBook);
    }
    return library;
}

function listBooks() {
    return library.map(book => book.title).join(", ");
}

function extractBooks() {
    return library.slice(0, 2);
}

function modifyBooks() {
    library.copyWithin(library.length - 1, 0, 1);
    return library;
}

function resetCopies(number) {
    library = library.map(book => ({ ...book, copies: number }));
    return library;
}

function removeFirstBook() {
    library.shift();
    return library;
}

function addFirstBook(book) {
    library.unshift(book);
    return library;
}