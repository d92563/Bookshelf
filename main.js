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
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};

// Gets book values from the form and creates a new book object

function bookInput() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;
    return new Book(title, author, pages, read);
}

const form = document.querySelector('#form');
form.addEventListener('submit', addBook);

// Adds the new book to the array and updates the bookshelf in the browser

function addBook(event) {
    event.preventDefault();
    bookshelf.push(bookInput());
    saveLocal();
    render();
    form.reset();

};

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

//Creates and updates the books in the browser

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

    bookshelfContainer.appendChild(bookDiv);

    // Deletes a book from bookshelf

    deleteBook.classList.add('delete');
    deleteBook.innerText = 'Delete';
    bookDiv.appendChild(deleteBook);
    deleteBook.addEventListener('click', () => {
        bookshelf.splice(bookshelf.indexOf(book), 1);
        saveLocal();
        render();
    })

    // Togle read / not read button

    readButton.addEventListener('click', () => {
        book.read = !book.read;
        saveLocal();
        render();
    })

   
}

function saveLocal() {
  localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
}

function restoreLocal() {
  bookshelf = JSON.parse(localStorage.getItem('bookshelf'));
  if (bookshelf === null) {
      bookshelf = [];
  }
  render();
}

restoreLocal();