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
    event.preventDefault();

    let bookToAdd = new Book(title, author, pages, read);
    bookshelf.push(bookToAdd);
    render();
    form.reset()

};

//Button to add new book to bookshelf

const addBookButton = document.querySelector('#add-book');
addBookButton.addEventListener('click', addBook)

//Button to open the pop-up form to add a new book

const addNewBook = document.querySelector('#add-new-book');
const popUpForm = document.querySelector('#pop-up-form');
popUpForm.addEventListener('click', () => {
    addNewBook.style.display = 'block';
})

//Creates books in the browser.

const bookshelfContainer = document.querySelector('#bookshelf-container');

function render() {

    const books = document.querySelectorAll('.book');
    books.forEach(book => bookshelfContainer.removeChild(book));
    for (let i = 0; i < bookshelf.length; i++){
        createBook(bookshelf[i]);
    }
    addNewBook.style.display = 'none';
}


//Creates the book DOM elements.

function createBook(book) {

    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readButton = document.createElement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', bookshelf.indexOf(book));

    titleDiv.classList.add('title');
    titleDiv.innerText = `Title: ${book.title}`;
    bookDiv.appendChild(titleDiv);

    authorDiv.classList.add('author');
    authorDiv.innerText = `Author: ${book.author}`;
    bookDiv.append(authorDiv);

    pagesDiv.classList.add('pages');
    pagesDiv.innerText = `Pages: ${book.pages}`;
    bookDiv.appendChild(pagesDiv);

    readButton.classList.add('read');
    if (book.read === true) {
        readButton.innerText = 'Read';
    } else {
        readButton.innerText = 'Not Read';
    }
    bookDiv.appendChild(readButton);


    bookshelfContainer.appendChild(bookDiv);



}

render();