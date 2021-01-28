let bookshelf = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 295,
        read: true
    }
];

class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value;
        this.read = form.read.checked;
    }
};

function addBook(title, author, pages, read) {

    let bookToAdd = new Book(title, author, pages, read);
    bookshelf.push(bookToAdd);
    render();
    form.reset()

};

//Button to add new book to bookshelf

const addBookButton = document.querySelector('#add-book');
addBookButton.addEventListener('click', addBook)

//Button to open the pop-up form to add a new book

const modalBg = document.querySelector('.modal-bg');
const modalButton = document.querySelector('.modal-button');
modalButton.addEventListener('click', () => {
    modalBg.classList.add('bg-active');
})

// X button to close the modal without adding a book

const modalClose = document.querySelector('.modal-close');
modalClose.addEventListener('click', () => {
    modalBg.classList.remove('bg-active');
})


//Creates books in the browser.

const bookshelfContainer = document.querySelector('.bookshelf-container');

function render() {
    const books = document.querySelectorAll('.book');
    books.forEach(book => bookshelfContainer.removeChild(book));
    for (let i = 0; i < bookshelf.length; i++){
        createBook(bookshelf[i]);
    }
    modalBg.classList.remove('bg-active');
}


//Creates the book DOM elements.

function createBook(book) {

    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readButton = document.createElement('button');
    const deleteBook = document.createElement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', bookshelf.indexOf(book));

    titleDiv.classList.add('title');
    titleDiv.innerText = `Title: ${book.title}`;
    bookDiv.append(titleDiv);

    authorDiv.classList.add('author');
    authorDiv.innerText = `Author: ${book.author}`;
    bookDiv.append(authorDiv);

    pagesDiv.classList.add('pages');
    pagesDiv.innerText = `Pages: ${book.pages}`;
    bookDiv.append(pagesDiv);

    readButton.classList.add('read');
    if (book.read === true) {
        readButton.innerText = 'Read';
    } else {
        readButton.innerText = 'Not Read';
    }
    bookDiv.append(readButton);

    // Delete a book from bookshelf

    deleteBook.classList.add('delete');
    deleteBook.innerText = 'Delete';
    bookDiv.appendChild(deleteBook);
    deleteBook.addEventListener('click', () => {
        bookshelf.splice(bookshelf.indexOf(book), 1);
        render();
    })

    bookshelfContainer.appendChild(bookDiv);

    // Togle read / not read button

    readButton.addEventListener('click', () => {
        book.read = !book.read;
        render();
    })

   
}



render();