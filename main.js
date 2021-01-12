let bookshelf = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 295,
        read: true
    }
];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBook(title, author, pages, read) {
    const bookToAdd = new Book(title, author, pages, read);
    bookshelf.push(bookToAdd);

};

addBook('aaa', 'bbb', 25, true);
console.log(bookshelf);